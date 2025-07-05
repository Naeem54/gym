"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/contact-form"
import {
  Dumbbell,
  Heart,
  Target,
  Zap,
  Users,
  Trophy,
  AirVent,
  Car,
  Wifi,
  ShowerHead,
  Lock,
  Star,
  MapPin,
  Clock,
  Instagram,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function IronKingFitness() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentTransformation, setCurrentTransformation] = useState(0)

  const testimonials = [
    {
      name: "Priya Sharma",
      image: "/placeholder.svg?height=80&width=80",
      quote: "IRON KING changed my life! Lost 15kg in 4 months with their amazing trainers.",
      rating: 5,
    },
    {
      name: "Rahul Patel",
      image: "/placeholder.svg?height=80&width=80",
      quote: "Best gym in Kurla! The equipment is top-notch and trainers are very supportive.",
      rating: 5,
    },
    {
      name: "Sneha Joshi",
      image: "/placeholder.svg?height=80&width=80",
      quote: "From zero to hero! The personal training program helped me build confidence.",
      rating: 5,
    },
  ]

  const transformations = [
    {
      name: "Amit K.",
      result: "Lost 12 kg in 3 months",
      transformationImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wauZdbzpwgcWd30qkJ-oD2jUwc4LUp-GUw&s",
      quote: "Consistency and dedication paid off!",
    },
    {
      name: "Pooja M.",
      result: "Gained 8 kg muscle in 6 months",
      transformationImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/201605/4_052616034852.jpg?VersionId=QMSMgW1BNqjHbCwC1SIxa2bPsMYAIrj4",
      quote: "Stronger than ever before!",
    },
    {
      name: "Vikram S.",
      result: "Lost 20 kg in 5 months",
      transformationImage: "https://xcellfitness.co.in/wp-content/uploads/2019/08/Deep-Mahaveer.jpg",
      quote: "Life-changing transformation!",
    },
  ]

  const trainers = [
    {
      name: "Imran Shaikh",
      specialty: "Personal Trainer",
      experience: "8 Years",
      image: "https://c.superprof.com/i/m/27081023/600/20241126083235/27081023.webp",
      instagram: "@Imran_trainer",
      quote: "Your only limit is you!",
    },
    {
      name: "Ritika Patil",
      specialty: "Fat Loss Expert",
      experience: "7 Years",
      image: "https://c.superprof.com/i/m/20500307/600/20241104112254/20500307.webp",
      instagram: "@Ritika_Patil",
      quote: "Strong is the new beautiful!",
    },
    {
      name: "Rohit Thakre",
      specialty: "Bodybuilding Coach",
      experience: "10 Years",
      image:
        "https://cdn-uploads-frankfurt.starofservice.com/uploads/pj/thumbs-medium/starofservice_c9710img20200411210145106.jpg",
      instagram: "@Rohit_bodybuilder",
      quote: "Champions are made in the gym!",
    },
  ]

  const services = [
    { icon: Users, title: "Personal Training", description: "One-on-one coaching" },
    { icon: Heart, title: "Cardio Workouts", description: "Heart-pumping sessions" },
    { icon: Dumbbell, title: "Strength Training", description: "Build raw power" },
    { icon: Target, title: "Fat Loss Programs", description: "Burn fat effectively" },
    { icon: Trophy, title: "Bodybuilding Prep", description: "Competition ready" },
    { icon: Zap, title: "Functional Training", description: "Real-world strength" },
  ]

  const amenities = [
    { icon: AirVent, title: "Air Conditioning" },
    { icon: Lock, title: "Locker Rooms" },
    { icon: Car, title: "Parking" },
    { icon: ShowerHead, title: "Showers" },
    { icon: Wifi, title: "Wi-Fi" },
  ]

  const galleryImages = [
    "https://content3.jdmagicbox.com/v2/comp/mumbai/f1/022pxx22.xx22.220223132244.u1f1/catalogue/iron-king-fitness-kurla-east-mumbai-fitness-centres-vexfu29ptr.jpg",
    "https://content.jdmagicbox.com/v2/comp/mumbai/f1/022pxx22.xx22.220223132244.u1f1/catalogue/iron-king-fitness-kurla-east-mumbai-gyms-b34vseckmd.jpg",
    "https://img.fitimg.in/studio_profile_1EFAEE9964E256.png",
    "https://content3.jdmagicbox.com/v2/comp/mumbai/f1/022pxx22.xx22.220223132244.u1f1/catalogue/iron-king-fitness-kurla-east-mumbai-fitness-centres-jl2r854hll.jpg",
    "https://img.fitimg.in/studio_profile_134B4800D228B5.png",
    "https://img.fitimg.in/studio_profile_CD74BB246F7EF4.png",
    "https://img.fitimg.in/studio_profile_95CFB58DB78886.png",
    "https://img.fitimg.in/studio-profile-756F69F7FB83DE.jpeg",
    "https://img.fitimg.in/studio_profile_80E2D68ABC0C42.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTransformation = () => {
    setCurrentTransformation((prev) => (prev + 1) % transformations.length)
  }

  const prevTransformation = () => {
    setCurrentTransformation((prev) => (prev - 1 + transformations.length) % transformations.length)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background image with overlay */}
  <div className="absolute inset-0 z-0">
    <Image
      src="https://housing.com/news/wp-content/uploads/2022/11/GYM-INTERIORS-FEATURE-compressed.jpg"
      alt="IRON KING FITNESS Gym"
      fill
      className="object-cover opacity-40"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-red-900/30" />
  </div>

  {/* Foreground content */}
  <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
    <div className="mb-6">
      <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent">
        IRON KING
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold text-red-500 mb-2">FITNESS</h2>
    </div>

    <p className="text-2xl md:text-3xl font-bold mb-8 text-gray-300">Unleash Your Inner Beast</p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* JOIN NOW Button */}
      <Button
        size="lg"
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 text-sm sm:text-base md:text-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group min-w-fit whitespace-nowrap"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">JOIN NOW</span>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white" />
      </Button>

      {/* BOOK FREE TRIAL Button */}
      <Button
        size="lg"
        variant="outline"
        className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-1.5 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 text-sm sm:text-base md:text-lg transform hover:scale-105 transition-all duration-300 bg-transparent relative overflow-hidden group min-w-fit whitespace-nowrap"
      >
        <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
        <span className="relative z-10 group-hover:text-black transition-colors duration-300">BOOK FREE TRIAL</span>
        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
      </Button>
    </div>
  </div>
</section>

    

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-red-500">
            ABOUT <span className="text-white">IRON KING</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
              IRON KING FITNESS is a premium fitness center located in Nehru Nagar, Kurla East. With expert trainers,
              top-tier equipment, and personalized plans, we've transformed
              <span className="text-red-500 font-bold"> 300+ lives</span>. Whether you're aiming for weight loss,
              strength gain, or general fitness — we've got your back.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">300+</div>
                <div className="text-gray-400">Lives Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">8+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-red-500 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-red-500 rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-500/20 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">
              MEET THE <span className="text-white">OWNER</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-4"></div>
            <p className="text-xl text-gray-400">The Vision Behind Iron King Fitness</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Owner Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-red-700/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-red-500/30 group-hover:border-red-500 transition-colors duration-300">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="https://img.freepik.com/premium-photo/portrait-handsome-male-fitness-instructor-gym-healthy-lifestyle-sport-concept-background_948175-1778.jpg"
                    alt="Rajesh Kumar - Owner of Iron King Fitness"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Owner name overlay */}
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-1">Rajesh Kumar</h3>
                    <p className="text-red-400 font-semibold">Founder & Head Trainer</p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Owner Story */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-700 rounded-full"></div>
                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Heart className="w-6 h-6 text-red-500 mr-3" />
                    My Journey
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    "My fitness journey began 15 years ago when I was overweight and struggling with low self-esteem. I
                    weighed 95kg and felt trapped in my own body. That's when I discovered the transformative power of
                    fitness."
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    "After losing 25kg and completely transforming my physique, I realized my true calling was to help
                    others experience the same life-changing transformation. In 2016, I opened Iron King Fitness with a
                    simple mission:
                    <span className="text-red-400 font-semibold">
                      {" "}
                      to create a space where everyone feels empowered to become their strongest self.
                    </span>
                    "
                  </p>

                  <div className="bg-black/50 rounded-lg p-6 border border-red-500/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-red-500 mb-3 flex items-center">
                        <Target className="w-5 h-5 mr-2" />
                        My Vision
                      </h4>
                      <p className="text-gray-300 italic leading-relaxed">
                        "Iron King Fitness isn't just a gym—it's a community where dreams become reality. Every member
                        who walks through our doors carries the potential to become their own Iron King or Queen. My
                        goal is to provide not just equipment and training, but the motivation, support, and belief that
                        transforms lives from the inside out."
                      </p>
                    </div>
                  </div>

                  {/* Achievement Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center bg-gray-900/50 rounded-lg p-4 border border-red-500/20 hover:border-red-500/40 transition-colors duration-300">
                      <div className="text-2xl font-bold text-red-500 mb-1">15+</div>
                      <div className="text-sm text-gray-400">Years Experience</div>
                    </div>
                    <div className="text-center bg-gray-900/50 rounded-lg p-4 border border-red-500/20 hover:border-red-500/40 transition-colors duration-300">
                      <div className="text-2xl font-bold text-red-500 mb-1">300+</div>
                      <div className="text-sm text-gray-400">Lives Transformed</div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-8">
                    <p className="text-gray-300 mb-4">
                      <span className="text-red-400 font-semibold">"Ready to start your transformation?"</span>
                    </p>
                    <Link
                      href="https://wa.me/919152074475?text=Hi%20Rajesh,%20I%20want%20to%20start%20my%20fitness%20journey%20at%20Iron%20King%20Fitness!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 relative overflow-hidden group transform hover:scale-105 transition-all duration-300">
                        <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        <span className="relative z-10 flex items-center">
                          <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                          Connect with Rajesh
                        </span>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        </div>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inspirational Quote */}
          <div className="mt-16 text-center">
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute -top-4 -left-4 text-6xl text-red-500/20 font-bold">"</div>
              <div className="absolute -bottom-4 -right-4 text-6xl text-red-500/20 font-bold">"</div>
              <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed relative z-10">
                Your body can stand almost anything.
                <span className="text-red-500"> It's your mind you have to convince.</span>
              </blockquote>
              <cite className="block mt-4 text-gray-400 text-lg">- Rajesh Kumar, Founder</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-500">
            OUR <span className="text-white">SERVICES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-black border-red-500/20 hover:border-red-500 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group hover:shadow-2xl hover:shadow-red-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <service.icon className="w-12 h-12 text-red-500 mx-auto mb-4 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </CardContent>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-red-700/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur -z-10"></div>
              </Card>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-8">GYM AMENITIES</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full">
                  <amenity.icon className="w-5 h-5 text-red-500" />
                  <span className="text-white">{amenity.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-500">
            MEET OUR <span className="text-white">TRAINERS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-red-500/20 hover:border-red-500 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <Image
                      src={trainer.image || "/placeholder.svg"}
                      alt={trainer.name}
                      width={250}
                      height={300}
                      className="rounded-lg mx-auto"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{trainer.name}</h3>
                  <Badge className="bg-red-600 text-white mb-2">{trainer.specialty}</Badge>
                  <p className="text-gray-400 mb-2">{trainer.experience} Experience</p>
                  <p className="text-sm text-gray-300 italic mb-4">"{trainer.quote}"</p>
                  <Link
                    href={`https://instagram.com/${trainer.instagram.replace("@", "")}`}
                    className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    {trainer.instagram}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Transformations Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">
              CLIENT <span className="text-white">TRANSFORMATIONS</span>
            </h2>
            <p className="text-xl text-gray-400">Real People. Real Results.</p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTransformation}
                className="absolute left-0 z-10 text-white hover:text-red-500"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              <Card className="bg-gray-900 border-red-500/20 max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-400 mb-2">TRANSFORMATION</p>
                        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-red-500/10 to-red-500/20 p-1">
                          <Image
                            src={transformations[currentTransformation].transformationImage || "/placeholder.svg"}
                            alt={`${transformations[currentTransformation].name} transformation`}
                            width={500}
                            height={300}
                            className="rounded-lg object-cover w-full"
                          />
                          <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-bold">
                            BEFORE
                          </div>
                          <div className="absolute top-2 right-2 bg-red-600/90 text-white px-2 py-1 rounded text-xs font-bold">
                            AFTER
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {transformations[currentTransformation].name}
                      </h3>
                      <Badge className="bg-red-600 text-white mb-4 text-lg py-1 px-3">
                        {transformations[currentTransformation].result}
                      </Badge>
                      <p className="text-gray-300 italic text-lg">"{transformations[currentTransformation].quote}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTransformation}
                className="absolute right-0 z-10 text-white hover:text-red-500"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTransformation(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTransformation ? "bg-red-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-500">
            MEMBERSHIP <span className="text-white">PLANS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black border-gray-700 hover:border-red-500 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">BASIC PLAN</h3>
                <p className="text-gray-400 mb-6">Gym Access Only</p>
                <div className="text-3xl font-bold text-red-500 mb-6">
                  ₹1,500<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="text-left space-y-2 mb-8 text-gray-300">
                  <li>• Full gym access</li>
                  <li>• Basic equipment usage</li>
                  <li>• Locker facility</li>
                  <li>• 6 AM - 10:30 PM access</li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 relative overflow-hidden group transform hover:scale-105 transition-all duration-300">
                  <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom"></span>
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 font-bold">
                    Get Started
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-600 rounded opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur -z-10"></div>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black border-red-500 transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-red-600 text-white px-4 py-1">POPULAR</Badge>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">GOLD PLAN</h3>
                <p className="text-gray-400 mb-6">Gym + Cardio + Trainer Access</p>
                <div className="text-3xl font-bold text-red-500 mb-6">
                  ₹2,500<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="text-left space-y-2 mb-8 text-gray-300">
                  <li>• Everything in Basic</li>
                  <li>• Cardio equipment access</li>
                  <li>• Group training sessions</li>
                  <li>• Nutrition guidance</li>
                  <li>• Progress tracking</li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 relative overflow-hidden group transform hover:scale-105 transition-all duration-300">
                  <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom"></span>
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 font-bold">
                    Get Started
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-600 rounded opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur -z-10"></div>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-700 hover:border-red-500 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">PERSONAL TRAINING</h3>
                <p className="text-gray-400 mb-6">One-on-One Coaching</p>
                <div className="text-3xl font-bold text-red-500 mb-6">
                  ₹3,000<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="text-left space-y-2 mb-8 text-gray-300">
                  <li>• Everything in Gold</li>
                  <li>• Personal trainer</li>
                  <li>• Custom workout plans</li>
                  <li>• Diet consultation</li>
                  <li>• Priority booking</li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 relative overflow-hidden group transform hover:scale-105 transition-all duration-300">
                  <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom"></span>
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 font-bold">
                    Get Started
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-600 rounded opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur -z-10"></div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-500">
            INSIDE <span className="text-white">IRON KING</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Iron King Fitness - ${index % 4 === 0 ? "Equipment" : index % 4 === 1 ? "Training Session" : index % 4 === 2 ? "Group Workout" : "Gym Interior"} ${Math.floor(index / 4) + 1}`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Image overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-white">
                      <h4 className="font-bold text-lg mb-1">
                        {index % 4 === 0
                          ? "Premium Equipment"
                          : index % 4 === 1
                            ? "Training Session"
                            : index % 4 === 2
                              ? "Group Workout"
                              : "Gym Interior"}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {index % 4 === 0
                          ? "State-of-the-art fitness equipment"
                          : index % 4 === 1
                            ? "Professional training in action"
                            : index % 4 === 2
                              ? "Community fitness sessions"
                              : "Modern gym facilities"}
                      </p>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-red-500/20">
              <div className="text-2xl font-bold text-red-500 mb-2">5000+ sq ft</div>
              <div className="text-gray-400">Spacious Training Area</div>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-6 border border-red-500/20">
              <div className="text-2xl font-bold text-red-500 mb-2">50+ Equipment</div>
              <div className="text-gray-400">Modern Fitness Machines</div>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-6 border border-red-500/20">
              <div className="text-2xl font-bold text-red-500 mb-2">Clean & Safe</div>
              <div className="text-gray-400">Sanitized Environment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-red-500">
            WHAT OUR <span className="text-white">MEMBERS SAY</span>
          </h2>

          <Card className="bg-gray-900 border-red-500/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Image
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-300 italic mb-6">"{testimonials[currentTestimonial].quote}"</p>
              <h3 className="text-lg font-bold text-white">{testimonials[currentTestimonial].name}</h3>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-red-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-500">
            START YOUR <span className="text-white">FITNESS JOURNEY</span>
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-500">
            GET IN <span className="text-white">TOUCH</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                  <p className="text-gray-300">
                    Haze Apartment, Ground & First Floor,
                    <br />
                    Near Canara Bank, Nehru Nagar,
                    <br />
                    Kurla East, Mumbai 400024
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Operating Hours</h3>
                  <p className="text-gray-300">6:00 AM – 10:30 PM (Daily)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://wa.me/919152074475?text=I%20LIKE%20KNOW%20MORE%20ABOUT%20YOUR%20GYM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="bg-green-600 hover:bg-green-700 w-full relative overflow-hidden group transform hover:scale-105 transition-all duration-300">
                    <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    <span className="relative z-10 flex items-center justify-center group-hover:animate-bounce">
                      <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      WhatsApp
                    </span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </div>
                  </Button>
                </Link>
                <Link
                  href="https://www.instagram.com/iron.kingfitness/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full relative overflow-hidden group transform hover:scale-105 transition-all duration-300">
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></span>
                    <span className="relative z-10 flex items-center justify-center group-hover:animate-pulse">
                      <Instagram className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Instagram
                    </span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-white to-transparent transform skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-700"></div>
                    </div>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0234567890123!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c7c7c7c7c7%3A0x1234567890abcdef!2sNehru%20Nagar%2C%20Kurla%20East%2C%20Mumbai%2C%20Maharashtra%20400024!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="256"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Iron King Fitness Location - Nehru Nagar, Kurla East, Mumbai"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp Button */}
      <Link
        href="https://wa.me/919152074475?text=Hi,%20I'm%20interested%20in%20joining%20IRON%20KING%20FITNESS!"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group relative overflow-hidden animate-bounce hover:animate-none"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
        <MessageCircle className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 rounded-full"></div>
        </div>
        <div className="absolute -inset-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur animate-ping group-hover:animate-pulse"></div>
      </Link>
    </div>
  )
}
