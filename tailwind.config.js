module.exports = {
  content: [    
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  purge: {
    options: {
      safelist: [
        /data-theme$/,
      ]
    }
  },
  daisyui: {
      themes: [
        {
          'mytheme': {
            'primary': '#75A8A9',
            'primary-focus': '#5E9697',
            'primary-content': '#ffffff',
            'secondary': '#3C161C',
            'secondary-focus': '#220C10',
            'secondary-content': '#ffffff',
            'accent': '#37cdbe',
            'accent-focus': '#2aa79b',
            'accent-content': '#ffffff',
            'neutral': '#220C10',
            'neutral-focus': '#1E0B0E',
            'neutral-content': '#ffffff',
            'base-100': '#f0f5f9',
            'base-200': '#E2EBF3',
            'base-300': '#d3e2ee',
            'base-content': '#220C10',
            'info': '#2094f3',
            'success': '#009485',
            'warning': '#ff9900',
            'error': '#ff5724',
          },
        },
      ],
    },
}
