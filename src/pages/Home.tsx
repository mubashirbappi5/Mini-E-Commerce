
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center my-12 py-10 flex flex-col items-center gap-5">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Discover Amazing Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Shop the latest trends with premium quality and unbeatable prices. 
            Find everything you need in one place.
          </p>
          <a href='#card' className=" py-2 bg-black text-white text-lg  rounded-xl px-4" >
            Shop Now
          </a>
        </div>

        {/* Products Grid */}
        <div id='card' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-200 rounded-lg shadow">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Free Shipping</h3>
            <p className="text-muted-foreground">Free shipping on all orders over $50</p>
          </div>

          <div className="text-center p-6 bg-gray-200 rounded-lg shadow">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Quality Guarantee</h3>
            <p className="text-muted-foreground">30-day money back guarantee</p>
          </div>

          <div className="text-center p-6 bg-gray-200 rounded-lg shadow">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75M15.91 13.34c.25-.46.38-.98.38-1.52a2.25 2.25 0 00-2.25-2.25c-.54 0-1.06.13-1.52.38" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h3>
            <p className="text-muted-foreground">Customer support available anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;