import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  defaultSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Core',
      items: ['basic-usage', 'models', 'workflows', 'tools', 'project-files'],
    },
    {
      type: 'category',
      label: 'Customization',
      items: ['subagents', 'skills', 'mcp', 'external-tools', 'hooks', 'remote-tools-sdk'],
    },
    {
      type: 'category',
      label: 'Sessions, Memory & Navigation',
      items: ['sessions', 'memory', 'atlas'],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'desktop-app',
        'ide-context',
        'web-client',
        'image-workshop',
        'mobile-access',
        'cloud-deployment',
        'browser-extension',
        'office-addin',
      ],
    },
  ],
};

export default sidebars;
