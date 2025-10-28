import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : ''
const isInGithubActions = !!process.env.GITHUB_ACTIONS
const isUserOrOrgSite = repoName && repoName.endsWith('.github.io')

export default defineConfig({
  // Ensure assets load correctly on GitHub Pages:
  // - User/Org site (repo ends with .github.io) should use '/'
  // - Project site should use '/:repoName/'
  base: isInGithubActions ? (isUserOrOrgSite ? '/' : repoName ? `/${repoName}/` : '/') : '/',
  plugins: [react()],
})
