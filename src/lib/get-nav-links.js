export default function getNavLinks() {
  return [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Who we are',
      link: '/services',
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: 'About Company', link: '/about/team' },
            { name: 'Our Team', link: '/about/company' },
          ],
        },
      ],
    },
    {
      label: 'What we serve',
      link: '/gallery',
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: 'Exhibition', link: '/Exhibition' },
            { name: 'Events', link: 'Events' },
            { name: 'Branding', link: 'Branding' },
            { name: 'Signage', link: 'Signage' },
            { name: 'Interior', link: 'Interior' },
          ],
        },
      ],
    },
    {
      label: 'Our Clients',
      link: '/clients',
    },
    {
      label: 'Customer Speaks',
      link: '/customers',
    },
    {
      label: 'Join our Team',
      link: '/team',
    },
    {
      label: 'Contact Us',
      link: '',
      cta_button: true,
    },
  ];
}
