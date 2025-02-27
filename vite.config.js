import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/", // Đường dẫn phải khớp với tên repo GitHub
})
