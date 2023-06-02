import { TFunction } from 'i18next';
import FroalaEditor from 'react-froala-wysiwyg';

// // @ts-ignore
// FroalaEditor.LANGUAGE.nl.translation['Text Color'] = 'Tekstkleur';
// // @ts-ignore
// FroalaEditor.LANGUAGE.nl.translation['Background Color'] = 'Achtergrondkleur';
// // @ts-ignore
// FroalaEditor.LANGUAGE.nl.translation['Insert a math equation - MathType'] =
//   'Voeg een wiskundige formule toe.';
// // @ts-ignore
// FroalaEditor.LANGUAGE.nl.translation['Insert a chemistry formula - ChemType'] =
//   'Voeg een chemische formule toe.';

export const useFroalaTranslations = (t: TFunction) => ({
  title: t('froala.paragraphStyles.title'),
  content: t('froala.paragraphStyles.wysiwygContent'),
  highlight: t('froala.paragraphStyles.highlight'),
  blocks: {
    definition: {
      title: t('froala.paragraphStyles.definition'),
      color: 'yellow',
    },
    property: {
      title: t('froala.paragraphStyles.property'),
      color: 'yellow',
    },
    notation: {
      title: t('froala.paragraphStyles.notation'),
      color: 'yellow',
    },
    method: {
      title: t('froala.paragraphStyles.method'),
      color: 'blue',
    },
    agreement: {
      title: t('froala.paragraphStyles.agreement'),
      color: 'green',
    },
    knowledge: {
      title: t('froala.paragraphStyles.knowledge'),
      color: 'yellow',
    },
    strategy: {
      title: t('froala.paragraphStyles.strategy'),
      color: 'blue',
    },
    hint: {
      title: t('froala.paragraphStyles.hint'),
      color: 'green',
    },
    goals: {
      title: t('froala.paragraphStyles.goals'),
      color: 'orange',
    },
    vocabulary: {
      title: t('froala.paragraphStyles.vocabulary'),
      color: 'green',
    },
    fact: {
      title: t('froala.paragraphStyles.fact'),
      color: 'lightyellow',
    },
    fr_grammaire: {
      title: t('froala.paragraphStyles.french.grammaire'),
      color: 'yellow',
    },
    fr_strategy: {
      title: t('froala.paragraphStyles.french.strategy'),
      color: 'blue',
    },
    fr_vocabulaire: {
      title: t('froala.paragraphStyles.french.vocabulaire'),
      color: 'green',
    },
    fr_objectifs: {
      title: t('froala.paragraphStyles.french.objectifs'),
      color: 'orange',
    },
    fr_phonetique: {
      title: t('froala.paragraphStyles.french.phonetique'),
      color: 'red',
    },
    fr_artistique: {
      title: t('froala.paragraphStyles.french.artistique'),
      color: 'lightyellow',
    },
    fr_orthographe: {
      title: t('froala.paragraphStyles.french.orthographe'),
      color: 'lightblue',
    },
    fr_culture: {
      title: t('froala.paragraphStyles.french.culture'),
      color: 'lightyellow',
    },
    history_goals: {
      title: t('froala.paragraphStyles.history.goals'),
      color: 'orange',
    },
    history_source: {
      title: t('froala.paragraphStyles.history.source'),
      color: 'red',
    },
    history_historical_thinking: {
      title: t('froala.paragraphStyles.history.historical_thinking'),
      color: 'blue',
    },
    history_memo: {
      title: t('froala.paragraphStyles.history.memo'),
      color: 'yellow',
    },
    history_concepts: {
      title: t('froala.paragraphStyles.history.concepts'),
      color: 'green',
    },
    history_actua: {
      title: t('froala.paragraphStyles.history.actua'),
      color: 'lightyellow',
    },
    en_grammer: {
      title: t('froala.paragraphStyles.english.grammar'),
      color: 'yellow',
    },
    en_strategy: {
      title: t('froala.paragraphStyles.english.strategy'),
      color: 'blue',
    },
    en_vocabulary: {
      title: t('froala.paragraphStyles.english.vocabulary'),
      color: 'green',
    },
    en_goals: {
      title: t('froala.paragraphStyles.english.goals'),
      color: 'orange',
    },
    latin_culture: {
      title: t('froala.paragraphStyles.latin.culture'),
      color: 'lightyellow',
    },
    latin_grammar: {
      title: t('froala.paragraphStyles.latin.grammar'),
      color: 'yellow',
    },
    latin_vocabulary: {
      title: t('froala.paragraphStyles.latin.vocabulary'),
      color: 'green',
    },
    math_assignment: {
      title: t('froala.paragraphStyles.math.assignment'),
      color: 'blue',
      hideTitle: true,
    },
  },
});
