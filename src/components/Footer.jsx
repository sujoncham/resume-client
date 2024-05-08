const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-white text-center py-10">
      <h3 className="text-3xl">dolorem nobis provident</h3>
      <h5>All right reserved, Kelbene</h5>
      <p>Kelbene {date.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
