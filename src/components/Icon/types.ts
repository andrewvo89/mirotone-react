import { ComponentProps } from 'react';

export type IconSize = 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';

export type IconProps = Omit<ComponentProps<'span'>, 'ref'> & {
  size?: IconSize;
  name: Icons;
};

export const peopleIcons = [
  'eye-closed',
  'shared-with',
  'team',
  'user',
  'author-cursor-view',
  'user-load',
  'eye',
  'comment-feedback',
] as const;

export const objectIcons = [
  'photo',
  'folder',
  'upload',
  'help',
  'link',
  'unlink',
  'settings',
  'pin',
  'analytics',
  'deactivated',
  'doc-note',
  'security',
  'billing',
  'filters',
  'image',
  'invitation',
  'trash',
  'help-question',
  'search',
  'magnet',
  'bell',
  'public',
  'sound-on',
  'envelope',
  'play',
  'lock',
  'unlock',
  'plug',
  'mic-on',
  'mic-off',
  'activity',
  'stop',
  'presentation',
  'sound-off',
  'map',
  'calendar',
  'home',
  'video',
  'learn',
  'thumbs-up',
  'thumbs-down',
  'backup',
  'pdf',
  'sticky-recognition',
  'boards',
  'app-boilerplate',
  'google',
  'tag',
] as const;

export const symbolIcons = [
  'parameters-vertical',
  'text-heading-one',
  'text-heading-two',
  'text-italic-bui',
  'text-underline-bui',
  'text-strikethrough-bui',
  'bold-bui',
  'bui',
  'numbered-list',
  'align-left',
  'info',
  'checkbox',
  'warning',
  'spreadsheets',
  'tile',
  'bullet-list',
  'list',
  'card-list',
  'layers',
  'grid',
  'parameters',
  'drag',
  'unmerge',
  'ungroup',
  'merge',
  'group',
  'duplicate',
  'screen-sharing',
  'more',
  'comment-add',
  'comments',
  'comment-close',
  'comment-eye',
  'download',
  'export',
  'key',
  'close',
  'collapse',
  'expand',
  'redo',
  'undo',
  'back-1',
  'back',
  'arrows-down',
  'arrows-up',
  'arrows-left',
  'arrows-right',
  'arrow-up',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'minus',
  'plus',
  'add-column-right',
  'add-row-bottom',
  'cursor',
  'cursor-user',
  'hand',
  'logout',
  'fit',
  'refresh',
  'embed',
] as const;

export const boardObjectIcons = [
  'arrow-line-shape',
  'arrow-line',
  'arrow-shape',
  'frames',
  'frame',
  'comment',
  'parallelogram',
  'eraser',
  'rounded',
  'star',
  'text',
  'text-plus',
  'sticky',
  'sticky-two',
  'sticky-bulk',
  'triangle',
  'rhombus',
  'line',
  'edit',
  'babble',
  'chat',
  'rectangle',
  'oval',
  'mockup',
  'templates',
  'card',
  'shapes',
  'timer',
] as const;

export const frameIcons = ['4x3', '16x9', 'custom', 'document'] as const;

export const deviceIcons = ['ipad', 'iphone', 'phone', 'sq', 'tablet', 'web'] as const;

export const editorIcons = ['no-color', 'text-horizontally', 'text-along'] as const;

export type PeopleIcons = (typeof peopleIcons)[number];
export type ObjectIcons = (typeof objectIcons)[number];
export type SymbolIcons = (typeof symbolIcons)[number];
export type BoardObjectIcons = (typeof boardObjectIcons)[number];
export type FrameIcons = (typeof frameIcons)[number];
export type DeviceIcons = (typeof deviceIcons)[number];
export type EditorIcons = (typeof editorIcons)[number];

export type Icons = PeopleIcons | ObjectIcons | SymbolIcons | BoardObjectIcons | FrameIcons | DeviceIcons;
