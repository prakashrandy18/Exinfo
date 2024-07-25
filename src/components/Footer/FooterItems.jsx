import { QUICK_LINKS, ADDRESS, CONTACT_INFO, SUPPORT } from './FooterMenu';
import Item from './Item';
const FooterItems = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={QUICK_LINKS} title="QUICK LINKS" />
      <Item Links={ADDRESS} title="ADDRESS" />
      <Item Links={CONTACT_INFO} title="CONTACT INFO" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default FooterItems;
