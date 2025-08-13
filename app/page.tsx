/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Heart, Clock, Star, MapPin, Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

export default function CafeteriaLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-stone-800 font-serif">Aroma & Sabor</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-stone-700 hover:text-amber-600 transition-colors font-medium"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-stone-700 hover:text-amber-600 transition-colors font-medium"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-stone-700 hover:text-amber-600 transition-colors font-medium"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("carta")}
                className="text-stone-700 hover:text-amber-600 transition-colors font-medium"
              >
                Carta
              </button>
              <button
                onClick={() => scrollToSection("testimonios")}
                className="text-stone-700 hover:text-amber-600 transition-colors font-medium"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-stone-700 hover:text-amber-600 transition-colors font-medium"
              >
                Contacto
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-stone-700 hover:text-amber-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-stone-200">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-left text-stone-700 hover:text-amber-600 transition-colors font-medium"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="text-left text-stone-700 hover:text-amber-600 transition-colors font-medium"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-left text-stone-700 hover:text-amber-600 transition-colors font-medium"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection("carta")}
                  className="text-left text-stone-700 hover:text-amber-600 transition-colors font-medium"
                >
                  Carta
                </button>
                <button
                  onClick={() => scrollToSection("testimonios")}
                  className="text-left text-stone-700 hover:text-amber-600 transition-colors font-medium"
                >
                  Testimonios
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-left text-stone-700 hover:text-amber-600 transition-colors font-medium"
                >
                  Contacto
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-stone-900/90 to-amber-900/90"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/fondo.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 to-amber-900/70" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
            Aroma & Sabor – Tu café, tu momento
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-100 leading-relaxed">
            Cafés de especialidad y repostería artesanal en un ambiente único
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection("carta")}
          >
            Ver nuestra carta
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-stone-800 mb-8 font-serif">Nuestra historia</h2>
              <p className="text-xl text-stone-600 leading-relaxed">
                Somos una cafetería local con pasión por el café de especialidad y productos artesanales hechos con
                amor.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-stone-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src="/barista-latte-art.png"
                alt="Barista sirviendo café"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-gradient-to-br from-stone-100 to-amber-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-stone-800 mb-20 font-serif">Lo que ofrecemos</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-6">Café de especialidad</h3>
                <p className="text-stone-600 text-lg">Granos seleccionados y tueste perfecto.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-6">Repostería artesanal</h3>
                <p className="text-stone-600 text-lg">Hecha fresca todos los días.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-6">Ambiente acogedor</h3>
                <p className="text-stone-600 text-lg">Espacio ideal para relajarte o trabajar.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="carta" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-stone-800 mb-20 font-serif">Nuestra carta destacada</h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Espresso Clásico", price: "$3.50", image: "/expresso.jpeg" },
              { name: "Cappuccino Artesanal", price: "$4.25", image: "/capuccino.jpeg" },
              { name: "Croissant de Almendra", price: "$2.75", image: "/croissant.jpeg" },
              { name: "Cheesecake de Frutos", price: "$5.50", image: "/cheesecake.jpeg" },
              { name: "Latte Macchiato", price: "$4.75", image: "/latte.jpeg" },
              { name: "Muffin de Chocolate", price: "$3.25", image: "/muffin.jpeg" },
            ].map((product, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full rounded-t-lg h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="px-4 pt-4">
                    <h3 className="font-bold text-stone-800 mb-2 text-lg">{product.name}</h3>
                    <p className="text-amber-600 font-bold text-xl">{product.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-24 bg-gradient-to-br from-amber-50 to-stone-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-stone-800 mb-20 font-serif">
            Lo que dicen nuestros clientes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                text: "El mejor café de la ciudad. El ambiente es perfecto para trabajar y relajarse.",
                image: "professional woman smiling, coffee shop customer",
              },
              {
                name: "Carlos Rodríguez",
                text: "La repostería es increíble, todo fresco y delicioso. Muy recomendado.",
                image: "middle aged man enjoying coffee, satisfied customer",
              },
              {
                name: "Ana Martínez",
                text: "Mi lugar favorito para reunirme con amigos. Excelente servicio y calidad.",
                image: "young woman with coffee cup, happy customer",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-stone-400 rounded-full blur opacity-75"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-stone-800 text-lg">{testimonial.name}</h4>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-stone-600 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-stone-800 mb-20 font-serif">Visítanos o haz tu pedido</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-stone-800 text-xl mb-1">Horario</h4>
                <p className="text-stone-600 text-lg">Lun-Dom: 7:00 AM - 10:00 PM</p>
              </div>
            </div>

            <div className="flex items-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-stone-800 text-xl mb-1">Dirección</h4>
                <p className="text-stone-600 text-lg">Plaza colón</p>
              </div>
            </div>

            <div>
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl">
                <CardContent className="py-6 px-8 text-center">
                  <div className="w-full flex justify-center">
                    <img src={"/whatsapp.svg"} className="w-[200px] mb-4" />
                  </div>

                  <h3 className="text-2xl font-bold text-stone-800 mb-4">¡Contáctanos por WhatsApp!</h3>
                  <p className="text-stone-600 text-lg mb-6">
                    Haz tu pedido o consulta directamente a través de WhatsApp para una atención más rápida y
                    personalizada.
                  </p>
                  <Button
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5493512795265?text=¡Hola! Me gustaría hacer una consulta sobre sus productos.",
                        "_blank"
                      )
                    }
                  >
                    Escribir por WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36741.44656003069!2d-64.21573691526727!3d-31.409051868212725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432993038308dbd%3A0x6b19099e5c73a073!2sPlaza%20Col%C3%B3n!5e0!3m2!1ses!2sar!4v1755109456343!5m2!1ses!2sar"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-stone-900 to-stone-800 text-stone-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-3xl font-bold font-serif mb-6 bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                Aroma & Sabor
              </h3>
              <p className="text-stone-300 text-lg">Tu café, tu momento</p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Enlaces rápidos</h4>
              <ul className="space-y-3 text-stone-300">
                <li>
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="hover:text-amber-400 transition-colors text-lg"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("carta")}
                    className="hover:text-amber-400 transition-colors text-lg"
                  >
                    Carta
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("nosotros")}
                    className="hover:text-amber-400 transition-colors text-lg"
                  >
                    Nosotros
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contacto")}
                    className="hover:text-amber-400 transition-colors text-lg"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Horarios</h4>
              <p className="text-stone-300 text-lg">Lunes a Domingo</p>
              <p className="text-stone-300 text-lg">7:00 AM - 10:00 PM</p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Síguenos</h4>
              <div className="flex space-x-6">
                <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors text-lg">
                  Facebook
                </a>
                <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors text-lg">
                  Instagram
                </a>
                <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors text-lg">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 mt-12 pt-8 text-center text-stone-400">
            <p className="text-lg">&copy; 2024 Cafetería Aroma & Sabor. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
