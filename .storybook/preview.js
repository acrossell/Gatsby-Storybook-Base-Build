//Default settings that came on install
// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }



//Import global styles
import '../src/globalStyles/main.scss'

export const parameters = {
  actions: { 
  argTypesRegex: "^on[A-Z].*" },
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: undefined,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: false,
  layout: 'fullscreen'
}