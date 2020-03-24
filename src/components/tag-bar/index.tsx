import React, { ReactElement } from 'react';
import TagItemComponent from 'components/items/tag-item';
import { useStaticQuery, graphql } from 'gatsby';
import { TagBarQueryQuery } from 'types';
import { Wrapper, Inner } from './style';

interface Props {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function TagBarComponent({
  selectedTags,
  setSelectedTags,
}: Props): ReactElement {
  const data: TagBarQueryQuery = useStaticQuery(graphql`
    query TagBarQuery {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___tags }) {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
        totalCount
      }
    }
  `);

  const tags: TagBarQueryQuery['allMarkdownRemark']['group'] =
    data.allMarkdownRemark.group;

  const selectTag = (tag: string): void => {
    if (tag === '#All') {
      setSelectedTags([]);
      return;
    }

    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((item: string) => item !== tag));
      return;
    }

    setSelectedTags(selectedTags.concat(tag));
  };

  const isAllSelected = selectedTags.length === 0;

  const tagList = tags.map((item, i) => (
    <TagItemComponent
      tag={item.tag}
      key={i}
      selectTag={selectTag}
      selected={selectedTags.includes(item.tag)}
    />
  ));

  return (
    <Wrapper>
      <Inner>
        <TagItemComponent
          tag='#All'
          selected={isAllSelected}
          selectTag={selectTag}
        />
        {tagList}
      </Inner>
    </Wrapper>
  );
}
