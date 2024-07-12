import Team from '@/components/team';
import About from '@/components/about';
import Footer from '@/components/footer';
import Meta from '@/components/meta/meta';
import HomeBless from '@/components/home';
import BookNow from '@/components/bookNow';
import Grooming from '@/components/grooming';
import Services from '@/components/servicesSec';
import Loading from '@/components/loading/loading';
import Testimonials from '@/components/testimonials';

export default function Home() {
    return (
        <>
            <Meta
                title="Bless Barbershop"
                description="Bless Barber Shop - Experience excellence in haircuts and men's grooming. Cozy atmosphere, skilled barbers, and high-quality services. Come renew your style with us!"
                canonical={`https://blessbarbershop.netlify.app`}
                ogimage="ogimage.png"
            />
            <main>
                <Loading />
                <HomeBless />
                <About />
                <BookNow />
                <Services />
                <Grooming />
                <Team />
                <Testimonials />
                <Footer />
            </main>
        </>
    );
}
