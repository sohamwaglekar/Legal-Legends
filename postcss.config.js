module.exports = {
  important: true,
  plugins: {
    tailwindcss: './tailwind.config.js',
    autoprefixer: {},
    
  },
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
}
