window.addEventListener('load', () => {
  // slider payment-cash
  $('#responsive').lightSlider({
    item: 4,
    loop: false,
    slideMove: 4,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    responsive: [{
      breakpoint: 800,
      settings: {
        item: 3,
        slideMove: 3,
        slideMargin: 6,
      }
    },
    {
      breakpoint: 480,
      settings: {
        item: 3,
        slideMove: 3
      }
    },
    {
      breakpoint: 320,
      settings: {
        item: 3,
        slideMove: 3
      }
    }
    ]
  });
  // slider payment-internet
  $('#payment-internet').lightSlider({
    item: 5,
    responsive: [{
      breakpoint: 992,
      settings: {
        item: 3,
        slideMargin: 6
      }
    }]
  });
  // data of icon banks
  const data = {
    internetBanks: [{
      id: 'BCP',
      figcaption: '',
      url: 'assets/images/logo-bcp.svg',
      detail: ['Select the option Payment of Services > Of enterprises and institutions > search by name > PAGOEFECTIVO > PAGOEFECTIVOSOLES']
    }, {
      id: 'BBVA',
      figcaption: '',
      url: 'assets/images/logo-bbva.svg',
      detail: ['Select the option Payment of Services > Of enterprises and institutions > search by name > PAGOEFECTIVO > PAGOEFECTIVOSOLES']
    }, {
      id: 'Interbank',
      figcaption: '',
      url: 'assets/images/logo-interbank.svg',
      detail: ['Select the option Payment to Institutions or Enterprises > Enterprise: PagoEfectivo > Service: PAGOEFECTIVO']
    }, {
      id: 'Scotiabank',
      figcaption: '',
      url: 'assets/images/logo-scotia.svg',
      detail: ['Select the option Payment to Institutions or Enterprises > Enterprise: PagoEfectivo > Service: PAGOEFECTIVO']
    }, {
      id: 'Banbif',
      figcaption: '',
      url: 'assets/images/logo-banbif.svg',
      detail: ['Select the option Payment of Services > Search by Companies and type PAGOEFECTIVO > Select the Company PAGOEFECTIVO']
    }],
    cashBanks: [{
      id: 'BCP',
      figcaption: 'Agents, agencies and grocery stores',
      url: 'assets/images/logo-bcp.svg'
    }, {
      id: 'BBVA',
      figcaption: 'Agents, agencies and grocery stores',
      url: 'assets/images/logo-bbva.svg'
    }, {
      id: 'Interbank',
      figcaption: 'Agents, agencies and grocery stores',
      url: 'assets/images/logo-interbank.svg'
    }, {
      id: 'Banbif',
      figcaption: 'Agencies',
      url: 'assets/images/logo-banbif.svg'
    }, {
      id: 'Fullcarga',
      figcaption: 'Agents and grocery stores',
      url: 'assets/images/logo-fullcarga.png'
    }, {
      id: 'Scotiabank',
      figcaption: 'Agents, agencies and grocery stores',
      url: 'assets/images/logo-scotia.svg'
    }, {
      id: 'WesternUnion',
      figcaption: 'Agents and grocery stores',
      url: 'assets/images/logo-wu.svg'
    }, {
      id: 'Kasnet',
      figcaption: 'Agents and grocery stores',
      url: 'assets/images/logo-kasnet.png'
    }]
  };
  // print in document icon payment internet for slider
  data.internetBanks.map(element => {
    let itemSlider = `<li class="nav-item icon-bank" data-detail="${element.detail}">
                            <img src="${element.url}" alt=${element.id} class="icon-payment-slider img-payment-internet my-2">
                        </li>`;
    $('#payment-internet').append(itemSlider);
  });
  // event for get details icons
  $('.icon-bank').click(function() {
    $(this).find('img').removeClass('active-bank').addClass('active-bank');
    $(this).siblings().find('img').removeClass('active-bank');
    $('#instructions-tab1').html('');
    let detailIntBank = `<p class="d-flex font-size-payment-instruction">
            <img src="assets/images/number-one-in-a-circle.png" alt="1" class="img-clock mx-1"><span>${$(this).data('detail')}</span></p>
          <p class="d-flex font-size-payment-instruction">
            <img src="assets/images/number-two-in-a-circle.png" alt="1" class="img-clock mx-1">
            <span>Enter your CIP code: 9125682 and follow the instructions.</span>
          </p>`;
    $('#instructions-tab1').append(detailIntBank);
  });

  data.cashBanks.map(element => {
    let itemCarrousel = `<li id=${element.id} class="icon-cash-bank" data-detail="${element.detail}">
                          <img src=${element.url} alt=${element.id}>
                          <p class="text-center">${element.figcaption}</p>
                        </li>`;
    $('#responsive').append(itemCarrousel);
  });

  data.cashBanks.map(element => {
    let itemCarrousel = `<li id=${element.id} class="icon-cash-bank" data-detail="${element.detail}">
                          <img src=${element.url} alt=${element.id}>
                          <p class="text-center">${element.figcaption}</p>
                        </li>`;
    $('#responsive').append(itemCarrousel);
  });

  $('#responsive').on('click', 'li', function() {
    $(this).find('img').removeClass('active-bank').addClass('active-bank');
    $(this).siblings().find('img').removeClass('active-bank');
  });

  $('.icon-cash-bank').click(function() {
    switch (true) {
    case $(this).is('#BCP'):
      $('#instructions-tab2').html('');
      var detailCashBankBcp = '<div class="BCP">\n            <p class="float-left">\n              <span class="mr-2">(*)</span>BCP Agents: Prove the code of the company: 02186.</p>\n            <p class="float-right">\n              <span class="mr-2">(*)</span>BCP Agents: Additional cost S/.1.00.</p>\n          </div>';
      $('#instructions-tab2').append(detailCashBankBcp);
      break;
    case $(this).is('#BBVA'):
      $('#instructions-tab2').html('');
      break;
    case $(this).is('#Interbank'):
      $('#instructions-tab2').html('');
      var detailCashBankInt = '<div class="Interbank">\n            <p class="float-left">\n              <span class="mr-2">(*)</span>Interbank Agents: provide the following code: 2735001</p>\n            <p class="float-right">\n              <span class="mr-2">(*)</span>Interbank Agents: additional cost S/. 2.00.</p>\n          </div>';
      $('#instructions-tab2').append(detailCashBankInt);
      break;
    case $(this).is('#Banbif'):
      $('#instructions-tab2').html('');
      break;
    case $(this).is('#Fullcarga'):
      $('#instructions-tab2').html('');
      var detailCashBankFullC = '<div class="Fullcarga">\n            <p class="float-left">\n              <span class="mr-2">(*)</span>You can find FullCarga in grocery stores, farmacies, internet cafés and parlors.</p>\n          </div>';
      $('#instructions-tab2').append(detailCashBankFullC);
      break;
    case $(this).is('#Scotiabank'):
      $('#instructions-tab2').html('');
      break;
    case $(this).is('#WesternUnion'):
      $('#instructions-tab2').html('');
      break;
    case $(this).is('#Kasnet'):
      $('#instructions-tab2').html('');
      break;
    }
  });

  $('#print-icon').on('click', () => {
    window.print();
  });
});