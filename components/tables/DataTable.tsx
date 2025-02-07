useServerComponent": true
  },
  "components": [
    { class: 'SortFilterTable' },
    { references: ['app'], name: 'currentApp' },
    { references: ['app'], selector: '/data', props: {
      data: {
        get: {}
      }
    } }
  ],
  "styles": {
    "backgrounds": {
      colors: {
        amber: {
          id: 'amber-500',
          class: 'bg-amber-500'
        },
        gray: {
          id: 'gray-700',
          class: 'bg-gray-300'
        }
      }
    },
    "styling": {
      "zebraStyle": {
        classes: ['flex', 'card'], 
        props: {
          zebraColor: ({ color }) => {
            let i = 0;
            return {
              color: {
                fill: color,
                stroke: '#999',
                box-sizing: 'none',
                transform: 'translateY(-1px)'
              },
              here: (i++) => {
                return i < [0, 2, 4, 6];
              }
            }
          },
          hover: (color) => color,
          active: (color) => color
        }
      },
      "header": {
        id: 'header',
        props: {
          aria-sort: '1', 
          aria-sort-key: 'id'
        }
      }
    }
  }
}