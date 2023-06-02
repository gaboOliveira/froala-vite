import { merge } from "lodash";
import { FC, useMemo, useRef } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import config, { froalaTheme } from "./config";
import FroalaContentWrapper from "./FroalaContentWrapper";
import { useFroalaTranslations } from "./froalaTranslations";

export type WysiwygEditorProps = {
    value: string;
    readOnly?: boolean;
};

const ClearFix = styled.div`
  clear: both;
`;

export const WysiwygEditor: FC<WysiwygEditorProps> = ({
    value,
    readOnly
}) => {
    const { t } = useTranslation();
    const translations = useFroalaTranslations(t);
    const isAuthor = true;
    const froalaRef = useRef<FroalaEditor | null>();

    const fullConfig = useMemo(
        () =>
            merge({}, config(translations, isAuthor, readOnly), {
                // scrollableContainer: '#' + id,
                heightMin: 'calc(20vh)',
                heightMax: 'calc(50vh)',
                events: {
                    'image.beforeUpload': function (images: FileList | Blob[]) {
                        return false;
                    },
                },
            }),
        [readOnly, translations, isAuthor]
    );

    return (
        <FroalaContentWrapper
            id={'id'}
            froalaTheme={froalaTheme}
            translations={translations}
            fullScreenEnabled={false}
            className={'className'}
            applyNoteStyles={false}
            forceTitleOnTop={false}
        >
            {readOnly ? (
                <FroalaEditorView model={value} />
            ) : (
                <FroalaEditor
                    ref={ref => (froalaRef.current = ref)}
                    tag="textarea"
                    config={fullConfig}
                    model={value}
                />
            )}
            <ClearFix />
        </FroalaContentWrapper>
    )
}