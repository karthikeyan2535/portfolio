
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

const ProjectCarousel = ({ images, title }: ProjectCarouselProps) => {
  return (
    <div className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, imageIndex) => (
            <CarouselItem key={imageIndex}>
              <div className="relative group">
                <img 
                  src={image} 
                  alt={`${title} screenshot ${imageIndex + 1}`}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious className="left-4 bg-gray-800/80 border-gray-600 hover:bg-gray-700/80" />
            <CarouselNext className="right-4 bg-gray-800/80 border-gray-600 hover:bg-gray-700/80" />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
