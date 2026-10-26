async function check() {
  const res = await fetch('http://localhost:3008/packages/dalhousie-dharamshala-amritsar-tour');
  const text = await res.text();
  
  // Extract Title
  const titleMatch = text.match(/<title>([^<]*)<\/title>/);
  console.log('Title:', titleMatch ? titleMatch[1] : 'NOT FOUND');
  
  // Extract Meta Description
  const metaDescMatch = text.match(/<meta name="description" content="([^"]*)"/);
  console.log('Meta Description:', metaDescMatch ? metaDescMatch[1] : 'NOT FOUND');

  // Extract Canonical
  const canonicalMatch = text.match(/<link rel="canonical" href="([^"]*)"/);
  console.log('Canonical:', canonicalMatch ? canonicalMatch[1] : 'NOT FOUND');

  // Extract JSON-LD
  const jsonLdMatches = [...text.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  console.log('JSON-LD count:', jsonLdMatches.length);
  jsonLdMatches.forEach((m, idx) => {
    console.log('JSON-LD #' + (idx+1) + ':', m[1]);
  });
}
check();
