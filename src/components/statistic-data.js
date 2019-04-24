export const menu = [
  {
    id: 'adv',
    name: 'Advertisers',
    items: [
      {
        id: 'adv_stat',
        name: 'DSP Statistics',
        tabs: [
          {
            name: 'Date',
            tmpAddr: 'static/js/MainApp/parts/rtb/',
            tmpName: 'date.html',
          },
          {
            name: 'Ad Spot',
            tmpAddr: 'static/js/MainApp/parts/rtb/',
            tmpName: 'spot.html',
            ctrlAddr: 'static/js/MainApp/Controller/Statistic/',
            ctrlName: 'RTBStatisticSpot.js',
            sortAddr: 'static/js/MainApp/parts/rtb/',
            sortName: 'stats.html'
          },
          {
            name: 'Country',
            tmpAddr: 'static/js/MainApp/parts/rtb/',
            tmpName: 'adspotcountry.html',
          },
          {
            name: 'Domains',
            tmpAddr: 'static/js/MainApp/parts/rtb/',
            tmpName: 'site.html',
          },
          {
            name: 'Devises',
            tmpAddr: 'static/js/MainApp/parts/rtb/',
            tmpName: 'device.html',
          },
          {
            name: 'OS',
            tmpAddr: 'static/js/MainApp/parts/rtb/',
            tmpName: 'os.html',
          },
          {
            name: 'Browsers',
            tmpAddr: 'static/js/MainApp/parts/rtb/',
            tmpName: 'browser.html',
          },
          {
            name: 'Language',
            tmpAddr: 'static/js/MainApp/parts/rtb/',
            tmpName: 'language.html',
          },
          {
            name: 'Carrier',
            tmpAddr: 'static/js/MainApp/parts/rtb/',
            tmpName: 'carrier.html',
          },
          {
            name: 'Custom',
            tmpAddr: 'static/js/MainApp/parts/rtb/',
            tmpName: 'stats.html',
          },
        ]
      }
    ]
  },
  // ================= Publisher =================
  {
    id: 'pub',
    name: 'Publisher',
    items: [
      {
        id: 'pub_stat',
        name: 'Statistics',
        tabs: [
          {
            name: 'Date',
            tmpAddr: 'static/js/MainApp/parts/publisher/',
            tmpName: 'date.html',
          },
          {
            name: 'Ad Spot',
            tmpAddr: 'static/js/MainApp/parts/publisher/',
            tmpName: 'ad_spot.html',
            ctrlAddr: 'static/js/MainApp/Controller/Statistic/',
            ctrlName: 'PublisherStatisticAdSpot.js'
          },
          {
            name: 'Country',
            tmpAddr: 'static/js/MainApp/parts/publisher/',
            tmpName: 'adspotcountry.html',
          },
          {
            name: 'Devices',
            tmpAddr: 'static/js/MainApp/parts/publisher/',
            tmpName: 'device.html',
          },
          {
            name: 'OS',
            tmpAddr: 'static/js/MainApp/parts/publisher/',
            tmpName: 'device.html',
          },
          {
            name: 'Browser',
            tmpAddr: 'static/js/MainApp/parts/publisher/',
            tmpName: 'device.html',
          },
          {
            name: 'Carrier',
            tmpAddr: 'static/js/MainApp/parts/publisher/',
            tmpName: 'language.html',
          },
          {
            name: 'Language',
            tmpAddr: 'static/js/MainApp/parts/publisher/',
            tmpName: 'language.html',
          },
          {
            name: 'Custom',
            tmpAddr: 'static/js/MainApp/parts/publisher/',
            tmpName: 'stats.html',
          },
        ]
      },
      {
        id: 'pub_ssp_stat',
        name: 'SSP Statistics',
        tabs: [
          {
            name: 'Date',
            tmpAddr: 'static/js/MainApp/parts/dsp_statistic/',
            tmpName: 'date.html',
          },
          {
            name: 'Ad Spot',
            tmpAddr: 'static/js/MainApp/parts/dsp_statistic/',
            tmpName: 'spot.html',
            ctrlAddr: 'static/js/MainApp/Controller/Statistic/',
            ctrlName: 'PublisherStatisticSpot.js'
          },
          {
            name: 'Country',
            tmpAddr: 'static/js/MainApp/parts/dsp_statistic/',
            tmpName: 'adspotcountry.html',
          },
          {
            name: 'Device',
            tmpAddr: 'static/js/MainApp/parts/dsp_statistic/',
            tmpName: 'device.html',
          },
          {
            name: 'OS',
            tmpAddr: 'static/js/MainApp/parts/dsp_statistic/',
            tmpName: 'device.html',
          },
          {
            name: 'Browser',
            tmpAddr: 'static/js/MainApp/parts/dsp_statistic/',
            tmpName: 'device.html',
          },
          {
            name: 'Language',
            tmpAddr: 'static/js/MainApp/parts/dsp_statistic/',
            tmpName: 'language.html',
          },
          {
            name: 'Carrier',
            tmpAddr: 'static/js/MainApp/parts/dsp_statistic/',
            tmpName: 'language.html',
          },
          {
            name: 'Custom',
            tmpAddr: 'static/js/MainApp/parts/dsp_statistic/',
            tmpName: 'stats.html',
          },
        ]
      }
    ]
  },
  // ================= Backoffice =================
  {
    id: 'back',
    name: 'Backoffice',
    items: [
      {
        id: 'back_stat',
        name: 'Campaign list',
        tabs: [
          {
            name: 'Date',
            tmpAddr: 'static/js/MainApp/parts/advertiser/',
            tmpName: 'date.html',
          },
          {
            name: 'Ad Spot',
            tmpAddr: 'static/js/MainApp/parts/advertiser/',
            tmpName: 'spot.html',
            ctrlAddr: 'static/js/MainApp/Controller/Statistic/',
            ctrlName: 'CampaignStatisticSpot.js'
          },
          {
            name: 'Country',
            tmpAddr: 'static/js/MainApp/parts/advertiser/',
            tmpName: 'adspotcountry.html',
          },
          {
            name: 'Creative',
            tmpAddr: 'static/js/MainApp/parts/advertiser/',
            tmpName: 'creative.html',
          },
          {
            name: 'Domains',
            tmpAddr: 'static/js/MainApp/parts/advertiser/',
            tmpName: 'app.html',
          },
          {
            name: 'Device',
            tmpAddr: 'static/js/MainApp/parts/advertiser/',
            tmpName: 'app.html',
          },
          {
            name: 'OS',
            tmpAddr: 'static/js/MainApp/parts/advertiser/',
            tmpName: 'device.html',
          },
          {
            name: 'Browser',
            tmpAddr: 'static/js/MainApp/parts/advertiser/',
            tmpName: 'device.html',
          },
          {
            name: 'Language',
            tmpAddr: 'static/js/MainApp/parts/advertiser/',
            tmpName: 'language.html',
          },
          {
            name: 'Carrier',
            tmpAddr: 'static/js/MainApp/parts/advertiser/',
            tmpName: 'language.html',
          },
          {
            name: 'Custom',
            tmpAddr: 'static/js/MainApp/parts/advertiser/',
            tmpName: 'stats.html',
          },
        ]
      }
    ]
  }
];