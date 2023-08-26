import Card from './Card';
import data from './data.json'
const About = () => {
  return (
    <div className="w-full h-screen grid place-content-center" id="about">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-yellow-500">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {
             data.map((item, index) => (
              <Card key={index} title={item.title} description={item.description} />
             ))
          }
        </div>
      </div>
    </div>
  );
};

export default About;
