import React, { FC } from 'react';
import styled from 'styled-components';

import { FroalaTheme, FroalaThemePaletteIndex } from './config';

// css
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

type FroalaContentWrapperProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  froalaTheme: FroalaTheme;
  translations: any;
  fullScreenEnabled: boolean;
  applyNoteStyles?: boolean;
  forceTitleOnTop?: boolean;
};
const FroalaContentWrapper = styled<FC<FroalaContentWrapperProps>>(
  ({
    translations,
    froalaTheme,
    fullScreenEnabled,
    applyNoteStyles,
    forceTitleOnTop,
    ...props
  }) => <div {...props} />
)`
  position: relative;
  margin-bottom: 3rem;
  // overflow: auto;
  // height: 400px;

  .fr-element.fr-disabled {
    user-select: initial; // allow selecting text even when disabled
  }

  mjx-container {
    font-size: unset !important;
  }

  ul,
  ol {
    list-style-position: outside;
  }

  .aside {
    position: absolute;
    margin-top: 0; // border collapse fix

    &.left {
      left: -2rem;
      transform: translateX(-100%);
    }

    &.right {
      right: -2rem;
      transform: translateX(100%);
    }
  }

  .title {
    color: ${({ theme }) => theme.typography.h1.color};
    font-size: ${({ theme }) => theme.typography.h1.fontSize};
    font-family: ${({ theme }) => theme.typography.h1.fontFamily};
    font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
    line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  }

  .subtitle {
    color: ${({ theme }) => theme.typography.h2.color};
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
    font-family: ${({ theme }) => theme.typography.h2.fontFamily};
    font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
    line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  }

  .normal {
    color: ${({ theme }) => theme.typography.body1.color};
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    font-family: ${({ theme }) => theme.typography.body1.fontFamily};
    font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
    line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  }

  .emphasis {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  .highlight {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.config.defaultBorderRadius};
    padding: 1rem;
    background-color: #fff;
    overflow: hidden;
  }

  .embed-wrapper {
    box-shadow: ${({ theme }) => theme.config.defaultBoxShadow};
    border-radius: ${({ theme }) => theme.config.defaultBorderRadius};
    padding: 1rem;
    background-color: ${({ theme }) => theme.palette.common.white};
  }

  .fr-wrapper {
    background-color: transparent !important;
    border-bottom: none !important;
    border: none !important;
  }

  .fr-second-toolbar {
    background-color: transparent !important;
  }

  iframe {
    max-width: 100%;
  }



  // PARAGRAPH STYLES
  .box-title {
    margin: 1rem 0 0 0 !important;
    padding: 0 1rem !important;

    font-weight: 700 !important;

    &::before {
      position: ${({ fullScreenEnabled }) => (fullScreenEnabled ? 'static' : 'absolute')};
      font-weight: 400;

      padding: ${({ fullScreenEnabled }) => (fullScreenEnabled ? '0 1rem 0 0' : '0 1rem')};
      transform: ${({ fullScreenEnabled }) =>
        fullScreenEnabled ? 'none' : 'translateX(calc(-100% - 2rem))'};

      @media print {
        position: static;
        transform: none;
      }
    }
  }

  // FIX FOR LISTS IN PARAGRAPHS
  ul,
  ol {
    margin: 0 !important;
    padding: 0 !important;
  }

  li.box-content {
    position: relative !important;
    margin: 0 !important;
    padding: 0.25rem 0 0.25rem 2.5rem !important;
    list-style: none !important;
  }

  ol {
    counter-reset: list;

    li.box-content:before {
      content: counter(list);
      counter-increment: list;
      position: absolute;
      top: 0.3rem;
      left: 1rem;
    }
  }

  ul {
    li.box-content:before {
      content: '';
      display: block;
      background-color: ${({ theme }) => theme.palette.text.primary};
      border-radius: 50%;
      width: 0.5rem;
      height: 0.5rem;
      position: absolute;
      top: 1.2rem;
      left: 1rem;
    }
  }

  // FIX FOR MIGRATION (embed-wrapper)
  p.embed-wrapper {
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    background-color: transparent;
  }

  @media screen and (max-width: 1150px) {
    .box-title:before {
      position: static;
      transform: none;
      padding: 0 1rem 0 0;
    }
  }

  .box-content {
    margin: 0 !important;
    padding: 1rem !important;
  }

  ${({ froalaTheme }) =>
    Object.keys(froalaTheme.palette).map((value: string) => {
      const color = (value as FroalaThemePaletteIndex) || 'yellow';
      const boxColors = froalaTheme.palette[color];

      return (
        !!boxColors &&
        `.${color} {
      &.box-title {
        //@ts-ignore
        color: ${boxColors.title.foreground} !important;
        //@ts-ignore
        background-color: ${boxColors.title.background} !important;
        &::before {
          //@ts-ignore
          background-color: ${boxColors.title.background} !important;
        }
      }
      &.box-content {
        //@ts-ignore
        background-color: ${boxColors.content} !important;
      }
    }`
      );
    })}

    ${({ forceTitleOnTop }) =>
      forceTitleOnTop &&
      ` 
  .box-title:before {
    position: static;
    transform: none;
    padding: 0 1rem 0 0;
  } !important`}


  ${({ translations }) =>
    Object.keys(translations.blocks).map(
      (translation: string) =>
        `.${translation}.box-title:before {
            content: '${translations.blocks[translation].title}';
            display: ${translations.blocks[translation].hideTitle ? 'none' : 'block'};
        }`
    )}
  
  // Remove unwanted styles from copy/paste content
  h1, h2, h3, a,
  p:not(.box-title):not(.box-content):not(.highlight) {
    background-color: transparent !important;
  }

  meta#isPasted ~ *:not(.box-title):not(.box-content):not(.highlight) {
    background-color: transparent !important;
  }

  .fr-view span.fr-img-caption.fr-dii.fr-fic:not(.fr-fir) {
    float: left;
    margin: 0;
  }

  .fr-view .fr-img-caption .fr-img-wrap .fr-inner {
    clear: both;
  }


  ${({ applyNoteStyles }) => {
    return (
      applyNoteStyles &&
      `.fr-box.fr-basic{
      border: none !important;
      z-index: 0 !important;
    }

    .fr-wrapper {
      padding-right: 2rem;
    }

    .fr-toolbar {
      z-index: 100 !important;
      border: none !important;
    }
    
    .fr-box {
      border: none !important;
      outline: none !important;
    }
    .fr-second-toolbar {
      border: none !important;
    }

    ul,
    ol {
      margin: 1rem !important;
      padding: 1rem !important;
    }
    `
    );
  }}
`;

export default FroalaContentWrapper;
