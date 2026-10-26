async function checkPackagesListing() {
  const res = await fetch('http://localhost:3008/packages');
  const html = await res.text();

  console.log('Status:', res.status);

  // Check that dummy packages are GONE:
  const hasManaliEscape = html.includes('Manali Adventure Escape');
  const hasKasol = html.includes('Kasol &amp; Kheerganga') || html.includes('Kasol & Kheerganga');
  const hasSpiti = html.includes('Spiti Valley Expedition');
  const hasShimla = html.includes('Shimla Heritage &amp; Nature') || html.includes('Shimla Heritage & Nature') || html.includes('Shimla Kullu Manali');
  const hasTibetan = html.includes('Dharamshala &amp; McLeod Ganj Cultural') || html.includes('Spiritual Dharamshala & McLeodganj');
  const hasDalhousieWeekend = html.includes('Dalhousie &amp; Khajjiar Weekend') || html.includes('Dalhousie & Khajjiar Weekend');

  console.log('Dummy packages present (All MUST be false):', {
    hasManaliEscape,
    hasKasol,
    hasSpiti,
    hasShimla,
    hasTibetan,
    hasDalhousieWeekend
  });

  // Check that User Real Packages ARE present:
  const hasDalhousieAmritsar = html.includes('Dalhousie, Dharamshala &amp; Amritsar') || html.includes('Dalhousie, Dharamshala & Amritsar');
  const hasTriund = html.includes('Triund Trek &amp; Dharamshala') || html.includes('Triund Trek & Dharamshala');
  const hasKangra = html.includes('Kangra Braman');
  const hasDivyaMandir = html.includes('Divya Mandir Yatra');
  const hasShaktiPeeth = html.includes('4 Shakti Peeth');
  const hasMahadev = html.includes('4 Mahadev');
  const hasChintpurni = html.includes('Mata Chintpurni');

  console.log('User Real packages present (All MUST be true):', {
    hasDalhousieAmritsar,
    hasTriund,
    hasKangra,
    hasDivyaMandir,
    hasShaktiPeeth,
    hasMahadev,
    hasChintpurni
  });
}

checkPackagesListing();
