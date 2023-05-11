const CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'USD',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Matão, São Paulo',
    scale: 'C'
  },
  clock: {
    format: 'h:i',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: [
    'crypto-rate',
    'weather-forecast'
  ],
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'comfy',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [{
        name: 'Music',
        links: [
            {
              url: 'https://open.spotify.com/',
              icon: 'brand-spotify',
              icon_color: '#22c95c'
            },
            {
              url: 'https://lofi.cafe',
              icon: 'radio',
              icon_color: '#009f71'
            },

        ]
      },
      {
        name: 'Watch',
        links: [
          {
            url: 'https://youtu.be/',
            icon: 'brand-youtube',
            icon_color: '#ff5d73'
          },
          {
            url: 'https://animepahe.ru',
            icon: 'brand-funimation',
            icon_color: '#cc6b8e'
          },
          {
            url: 'https://fmovies.to',
            icon: 'movie',
            icon_color: '#5f51fe'
          },
          {
            url: 'https://twitch.com',
            icon: 'brand-twitch',
            icon_color: '#9147ff'
          },
        ]
      },
      {
        name: 'Google',
        links: [
          {
            url: 'https://mail.google.com/',
            icon: 'mail',
            icon_color: '#ec4d9a'
          },
          {
            url: 'https://translate.google.com/',
            icon: 'language-katakana',
            icon_color: '#7b8cde'
          },
          {
            url: 'https://drive.google.com/drive',
            icon: 'brand-google-drive',
            icon_color: '#bec968'
          },
          {
            url: 'https://maps.google.com/',
            icon: 'map-pin',
            icon_color: '#faafa0'
          },
          {
            url: 'https://www.google.com/travel/flights',
            icon: 'plane',
            icon_color: '#ffc4ac'
          },
        ]
      }
      ]
    },
    {
      name: 'shops',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [
        {
          name: 'Everything',
          links: [
            {
              url: 'https://www.etsy.com/',
              icon_color: '#c57750',
              icon: 'brand-etsy'
            },
            {
              url: 'https://www.aliexpress.com/',
              icon: 'mail-fast',
              icon_color: '#ff6861'
            },
            {
              url: 'https://www.amazon.de/',
              icon: 'brand-amazon',
              icon_color: '#ffff7f'
            },
            {
              url: 'https://www.mimovrste.com/',
              icon: 'package',
              icon_color: '#fdc619',
            },
          ]
        },
        {
          name: 'Makeup & skincare',
          links: [
            {
              name: 'colourpop',
              url: 'https://colourpop.com/',
              icon: 'scribble',
              icon_color: '#b3859c'
            },
            {
              name: 'licila',
              url: 'https://www.licila.si/',
              icon: 'eye-closed',
              icon_color: '#b3859c'
            },
            {
              name: 'missha',
              url: 'https://missha.si/',
              icon: 'plant-2',
              icon_color: '#5a809f'
            },
            {
              name: 'ippoyo',
              url: 'https://www.ippoyo.si/',
              icon: 'flower',
              icon_color: '#6d8dae'
            },
          ]
        },
        {
          name: 'Clothing',
          links: [
            {
              name: 'teuta',
              url: 'https://www.teutamatoshi.com/',
              icon: 'hanger',
              icon_color: '#f6abbf'
            },
            {
              name: 'mass',
              url: 'https://www.mass.si/',
              icon: 'shoe',
              icon_color: '#678bae'
            },
            {
              name: 'cider',
              url: 'https://www.shopcider.com/',
              icon: 'milkshake',
              icon_color: '#76dc76'
            },
          ]
        },
      ]
    },
    {
      name: 'Misc',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: '',
          links: [
            {
              name: 'e-studenc',
              url: 'https://www.studentski-servis.com/',
              icon: 'grave',
              icon_color: '#534cb7'
            },
            {
              name: 'drive',
              url: 'https://www.pdfdrive.com/',
              icon: 'pdf',
              icon_color: '#8f6de0'
            },
            {
              name: 'github',
              url: 'https://github.com/',
              icon: 'brand-github',
              icon_color: '#6d69cf'
            },
            {
              name: 'genshin guides',
              url: 'https://game8.co/games/Genshin-Impact',
              icon: 'sparkles',
              icon_color: '#5356c5'
            },
            {
              name: 'tabs',
              url: 'https://www.kalimbatabs.net/',
              icon: 'mickey',
              icon_color: '#554fab'
            },
            {
              name: 'tabs',
              url: 'https://www.ukulele-tabs.com/',
              icon: 'guitar-pick',
              icon_color: '#5d5ccc'
            },
            {
              name: 'cha',
              url: 'https://www.cha.si/',
              icon: 'leaf',
              icon_color: '#8f6de0'
            },
            {
              name: 'fragrantica',
              url: 'https://www.fragrantica.com/',
              icon: 'spray',
              icon_color: '#5d5ccc'
            },
            {
              name: 'airbnb',
              url: 'https://www.airbnb.si/',
              icon: 'brand-airbnb',
              icon_color: '#5d5ccc'
            },
          ]
        },
      ]
    }]
});
