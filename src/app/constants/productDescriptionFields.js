const productDescriptionfields = [{
  name: 'tone',
  label: 'Tone',
  placeholder: 'Neutral (default)',
  type: 'singleSelect',
  options: [
    { value: 'Neutral', label: 'Neutral' },
    { value: 'Friendly', label: 'Friendly' },
    { value: 'Funny', label: 'Funny' },
    {
      value: 'Professional',
      label: 'Professional',
    },
    {
      value: 'Adventurous',
      label: 'Adventurous',
    },
    { value: 'Luxurious', label: 'Luxurious' },
  ],
  required: false,
}, {
  name: 'companyName',
  label: 'Company Name',
  placeholder: 'e.g. Candlesmith',
  type: 'string',
  required: true,
}, {
  name: 'productName',
  label: 'Product Name',
  placeholder: 'e.g. Hygge Vanilla Candle',
  type: 'string',
  required: true,
}, {
  name: 'productKeywords',
  label: 'Product Characteristics',
  helper: 'We recommend 2-8 characteristics. You can also include pain points your product solves.',
  type: 'keywords',
  required: true,
}, {
  name: 'brandKeywords',
  label: 'Brand Keywords',
  helper: 'We recommend 1-3 keywords. e.g. Luxurious, Natural, High-quality.',
  type: 'keywords',
  required: true,
}, {
  name: 'negativeKeywordArray',
  label: 'Keywords to Avoid',
  helper: 'Are there any words you would like to avoid?',
  type: 'keywords',
  required: false,
}];

export default productDescriptionfields;
