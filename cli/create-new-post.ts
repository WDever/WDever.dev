import fs from 'fs-extra';
import { format } from 'date-fns';
import rr from 'recursive-readdir';
import matter from 'gray-matter';
import log from 'signale';
import { prompt } from 'inquirer';

interface IFrontMatter {
  title: string;
  date: string;
  description: string;
  tags: string;
  image: `Add main image of post`;
}

const cwd: string = process.cwd();

const CONTENTS_DIR: string = '/content/articles';
const TARGET_DIR = `${cwd}${CONTENTS_DIR}`;
const UTF_8 = 'utf8';
const DATE_FORMAT = 'yyyy-MM-dd HH:MM:SS';

const includesStrInArr = (long: string[], short: string[]): boolean =>
  short.some((item) => long.includes(item));

const replaceSpaceToDash = (str: string): string => str.split(/\s+/).join('-');

const fetchTitle = async (): Promise<string> => {
  const { title } = await prompt<{ title: string }>([
    {
      type: 'input',
      name: 'title',
      message: 'Title: ',
      default: (): string => 'New Post',
    },
  ]);

  return title;
};

const fetchDirName = async (defaultDirName: string): Promise<string> => {
  const { input } = await prompt<{ input?: string }>([
    {
      type: 'input',
      name: 'input',
      message: `Directory name / URL (use '-' instead of space): `,
      default: (): string => replaceSpaceToDash(defaultDirName),
      validate: async (input: string): Promise<boolean | string> => {
        if (input.length === 0) {
          return true;
        }

        const dirName = replaceSpaceToDash(input);

        const existingDirs = await fs.readdir(TARGET_DIR);

        if (existingDirs.includes(dirName)) {
          return 'Existing dir name';
        }

        return true;
      },
    },
  ]);

  if (input === undefined) {
    const dirName = replaceSpaceToDash(defaultDirName);
    return `${TARGET_DIR}/${dirName}`;
  }

  const dirName = replaceSpaceToDash(input);

  return `${TARGET_DIR}/${dirName}`;
};

const getTags = async (): Promise<string[]> => {
  let mdFiles = await rr(TARGET_DIR, [
    '*.png',
    '*.jpg',
    '*.svg',
    '*.gif',
    '*.jpeg',
  ]);

  mdFiles = mdFiles.filter((file: string) => !file.includes('.DS_Store'));

  const tagsArr: string[][] = [...new Set(mdFiles)]
    .map((file: string) => fs.readFileSync(file, UTF_8))
    .map((item: string) => matter(item).data.tags);

  const tags = [
    ...new Set(
      tagsArr.reduce((acc: string[], cur: string[]) => acc.concat(cur)),
    ),
  ];

  return tags;
};

const fetchTags = async (): Promise<string> => {
  let tags: string[];
  const additionalTagOption = '[ ADD NEW TAG ]';

  const existingTags = await getTags();

  const tagChoices = [...existingTags, additionalTagOption];

  const { selectedTags } = await prompt<{ selectedTags: string[] }>([
    {
      type: 'checkbox',
      name: 'selectedTags',
      message: `Select post's tags`,
      choices: tagChoices,
    },
  ]);

  if (selectedTags.includes(additionalTagOption)) {
    const { additionalTags } = await prompt<{ additionalTags: string }>([
      {
        type: 'input',
        name: 'additionalTags',
        message: `Enter additional tags (Separate by ','')`,
        validate: async (input: string): Promise<boolean | string> => {
          const additionalTagsArr: string[] = input
            .split(',')
            .map((item: string) => `#${item.trim()}`);

          const uniqAdditionalTagsArr = [...new Set(additionalTagsArr)];

          const isContain = includesStrInArr(
            existingTags,
            uniqAdditionalTagsArr,
          );

          if (isContain) {
            return 'Some tags are already exist!';
          }

          return true;
        },
      },
    ]);

    const additionalTagsArr: string[] = additionalTags
      .split(',')
      .map((item: string) => `#${item.trim()}`);

    const uniqAdditionalTagsArr = [...new Set(additionalTagsArr)];

    tags = uniqAdditionalTagsArr
      .concat(selectedTags)
      .filter((item: string) => item !== additionalTagOption);

    return JSON.stringify(tags);
  }

  tags = selectedTags;

  return JSON.stringify(tags);
};

const createFrontMatter = (contents: IFrontMatter): string => {
  const frontMatterArr = matter.stringify('', contents).split('\n');

  frontMatterArr[4] = frontMatterArr[4].replace(/[']+/g, '');

  return frontMatterArr.join('\n');
};

(async function createNewPost(): Promise<void> {
  const date = format(new Date(), DATE_FORMAT);

  log.info(`New Post Date ${date}`);
  log.start(`Create post process`);

  const title = await fetchTitle();
  const dirName = await fetchDirName(title);

  await fs.ensureDir(dirName);

  const tags = await fetchTags();

  const frontMatterData: IFrontMatter = {
    title,
    date,
    description: '',
    tags,
    image: `Add main image of post`,
  };

  const frontMatter = createFrontMatter(frontMatterData);

  fs.writeFile(`${dirName}/index.md`, frontMatter, (e) => {
    if (e) {
      log.error('Error Occurred During Write File');
      log.error(e);
      return;
    }

    log.complete(
      `\n📝 Sucess to create new post! /${dirName}/index.md\n\n${frontMatter}`,
    );

    log.info(`Don't forget to add main image`);
    log.star(`Let's start !`);
  });
})();
