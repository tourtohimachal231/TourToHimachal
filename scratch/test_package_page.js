async function test() {
  const baseUrl = 'http://localhost:3008';
  
  console.log('Testing Package Detail Page: /packages/dalhousie-dharamshala-amritsar-tour');
  try {
    const detailRes = await fetch(`${baseUrl}/packages/dalhousie-dharamshala-amritsar-tour`);
    console.log('Detail page status:', detailRes.status);
    const detailHtml = await detailRes.text();
    
    const hasTitle = detailHtml.includes('Dalhousie, Dharamshala &amp; Amritsar Tour Package') || detailHtml.includes('Dalhousie, Dharamshala & Amritsar');
    console.log('Contains package title:', hasTitle);
    
    const hasDay1 = detailHtml.includes('Amritsar to Dalhousie');
    const hasDay2 = detailHtml.includes('Dalhousie and Khajjiar');
    const hasDay3 = detailHtml.includes('Dalhousie to Dharamshala');
    const hasDay4 = detailHtml.includes('Dharamshala to Amritsar');
    const hasDay5 = detailHtml.includes('Amritsar Sightseeing');
    const hasDay6 = detailHtml.includes('Departure from Amritsar');
    console.log('Itinerary days check:', { Day1: hasDay1, Day2: hasDay2, Day3: hasDay3, Day4: hasDay4, Day5: hasDay5, Day6: hasDay6 });
    
    const hasPriceOnRequest = detailHtml.includes('Price on Request');
    const hasZeroPrice = detailHtml.includes('₹0');
    console.log('Price on Request present:', hasPriceOnRequest);
    console.log('Misleading ₹0 present:', hasZeroPrice);
    
    const hasRequestQuote = detailHtml.includes('Request a Quote');
    console.log('Request a Quote button present:', hasRequestQuote);

    const hasImage = detailHtml.includes('dalhousie-dharamshala-amritsar.jpg');
    console.log('Package hero image present:', hasImage);
  } catch (err) {
    console.error('Detail page error:', err);
  }

  console.log('\nTesting Listing Page: /packages');
  try {
    const listRes = await fetch(`${baseUrl}/packages`);
    console.log('Listing page status:', listRes.status);
    const listHtml = await listRes.text();
    const hasSlugInList = listHtml.includes('dalhousie-dharamshala-amritsar-tour');
    console.log('Package card present in listing:', hasSlugInList);
  } catch (err) {
    console.error('Listing page error:', err);
  }

  console.log('\nTesting Sitemap: /sitemap.xml');
  try {
    const sitemapRes = await fetch(`${baseUrl}/sitemap.xml`);
    console.log('Sitemap status:', sitemapRes.status);
    const sitemapText = await sitemapRes.text();
    const hasSitemapEntry = sitemapText.includes('dalhousie-dharamshala-amritsar-tour');
    console.log('Package present in sitemap.xml:', hasSitemapEntry);
  } catch (err) {
    console.error('Sitemap error:', err);
  }
}

test();
