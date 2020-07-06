import React, { ReactElement } from 'react';
import TagItemComponent from 'components/items/tag-item';
import { useStaticQuery, graphql } from 'gatsby';
import { TagBarQueryQuery } from 'types';
import styled from 'styled-components';
import { pxToRem } from 'utils';
import { Default, BaseInner, media } from 'utils/style';

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
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___tags }
        filter: { frontmatter: { tags: { nin: "#About" } } }
      ) {
        group(field: frontmatter___tags) {
          totalCount
          tag: fieldValue
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
      <ul>
        <TagItemComponent
          tag='#All'
          selected={isAllSelected}
          selectTag={selectTag}
        />
        {tagList}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  margin-bottom: ${pxToRem(56)};

  background-image: ${Default.gradient};

  ${media.phone} {
    margin-bottom: ${pxToRem(56)};
  }

  ul {
    ${BaseInner}

    padding-top: ${pxToRem(32)};
    padding-bottom: ${pxToRem(16)};

    list-style: none;

    ${media.phone} {
      white-space: nowrap;

      overflow: scroll;

      padding-top: ${pxToRem(32)};
      padding-bottom: ${pxToRem(16)};
    }
  }
`;
