async function checkItinerary() {
  const res = await fetch('http://localhost:3008/packages/dalhousie-dharamshala-amritsar-tour');
  const html = await res.text();

  console.log('Page status:', res.status);
  
  // Check for "No sub-sections added"
  const hasNoSubsections = html.includes('No sub-sections added');
  console.log('Contains "No sub-sections added":', hasNoSubsections, '(Should be false!)');

  // Check for stray "0" after customized quote
  const hasStrayZero = html.includes('customized quote based on hotel choice &amp; dates</p>\n0') || 
                       html.includes('customized quote based on hotel choice & dates</p>\n0') ||
                       html.includes('dates</p>0');
  console.log('Contains stray 0 after subtitle:', hasStrayZero, '(Should be false!)');

  // Check for rich subtitle titles
  const hasSub1 = html.includes('Pickup &amp; Scenic Drive') || html.includes('Pickup & Scenic Drive');
  const hasSub2 = html.includes('Hotel Check-In &amp; Evening') || html.includes('Hotel Check-In & Evening');
  const hasSub3 = html.includes('Excursion to Khajjiar &amp; Khajji Nag Temple') || html.includes('Excursion to Khajjiar & Khajji Nag Temple');
  const hasSub4 = html.includes('Tsuglagkhang Complex &amp; Dalai Lama Temple') || html.includes('Tsuglagkhang Complex & Dalai Lama Temple');
  const hasSub5 = html.includes('Sri Harmandir Sahib (Golden Temple) &amp; Jallianwala Bagh') || html.includes('Sri Harmandir Sahib (Golden Temple) & Jallianwala Bagh');
  
  console.log('Subtitles present in HTML:', {
    Day1_Sub1: hasSub1,
    Day1_Sub2: hasSub2,
    Day2_Sub2: hasSub3,
    Day4_Sub1: hasSub4,
    Day5_Sub1: hasSub5
  });

  // Check key highlights chips
  const hasTransferHeader = html.includes('Key Day Highlights &amp; Transfers') || html.includes('Key Day Highlights & Transfers');
  console.log('Key Highlights section present:', hasTransferHeader);
}

checkItinerary();
