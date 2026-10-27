async function verifyMahadevImages() {
  const baseUrl = 'http://localhost:3008';

  console.log('Testing /packages listing page...');
  const listRes = await fetch(`${baseUrl}/packages`);
  console.log('Listing status:', listRes.status);
  const listHtml = await listRes.text();

  const hasMahadevInList = listHtml.includes('4-mahadev-darshan-1-shakti-peeth-chintpurni-spiritual-circuit');
  console.log('Mahadev package present in listing:', hasMahadevInList);

  const hasImageInList = listHtml.includes('4-mahadev-chintpurni-circuit.jpg');
  console.log('Mahadev new image present in listing card:', hasImageInList);

  console.log('\nTesting /packages/4-mahadev-darshan-1-shakti-peeth-chintpurni-spiritual-circuit detail page...');
  const detailRes = await fetch(`${baseUrl}/packages/4-mahadev-darshan-1-shakti-peeth-chintpurni-spiritual-circuit`);
  console.log('Detail page status:', detailRes.status);
  const detailHtml = await detailRes.text();

  const hasHeroImage = detailHtml.includes('4-mahadev-chintpurni-circuit.jpg');
  console.log('Mahadev hero image present in detail page:', hasHeroImage);

  // Also check public image asset accessibility
  const imageRes = await fetch(`${baseUrl}/Images/4-mahadev-chintpurni-circuit.jpg`);
  console.log('Image asset HTTP status:', imageRes.status, 'Content-Type:', imageRes.headers.get('content-type'));
}

verifyMahadevImages();
