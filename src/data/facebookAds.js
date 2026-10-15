// Facebook ads: copy, monthly plans and prices.
// All prices are in pounds sterling and exclude VAT. Change the numbers here.
export const facebookAds = {
  title: 'Facebook ads for UK businesses',
  intro:
    'We plan, set up, run and report on your Facebook and Instagram ads. You pay a fixed monthly fee for our work. Your ad budget goes straight to Meta, so you can see exactly what it spends.',
  included: [
    'Account, Meta pixel and conversion tracking set up',
    'UK targeting, with the audience chosen for your offer',
    'Ad copy, images or short video made for your business',
    'Weekly report with enquiries and cost per enquiry',
  ],
  setupFee: 150,
  tiers: [
    {
      id: 'starter',
      name: 'Starter',
      price: 295,
      summary: 'One campaign for a single offer, with ad spend up to £1,000 a month.',
      fit: 'A good first step if you sell one main thing.',
      features: [
        'One campaign with up to two ad sets',
        'Two new ad creatives each month',
        'Email support during working hours',
      ],
      highlight: false,
    },
    {
      id: 'growth',
      name: 'Growth',
      price: 495,
      summary: 'Up to three campaigns for different offers, with ad spend up to £3,000 a month.',
      fit: 'A good fit if you sell more than one product or service.',
      features: [
        'Up to three campaigns with six ad sets',
        'Four new ad creatives each month, with A/B tests',
        'Conversion tracking and landing page suggestions',
        'A fortnightly call to review results',
      ],
      highlight: true,
    },
  ],
};
