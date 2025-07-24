import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, BookOpen, Video, Calendar, Star, ArrowRight, Sparkles } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-8 border border-purple-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Mais de 1.000 pessoas já transformaram suas vidas
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
                Descubra Como a
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Inteligência Artificial
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
                Pode Facilitar Sua Vida
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Mesmo depois dos 50! Aprenda do zero com linguagem simples, prática e acolhedora —
              <span className="font-semibold text-purple-700"> sem precisar entender "coisa de jovem"</span>
            </p>

            {/* VSL Container */}
            <div className="relative max-w-4xl mx-auto mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900 to-blue-900 p-1">
                <div
                  className="relative w-full bg-black rounded-xl overflow-hidden"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/tFMr9G-pTPo?si=pvAi5g66lVLlcGN1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Offer Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-600 mr-2" />
                <span className="text-lg font-semibold text-gray-700">
                  Ebook + 2 aulas completas com Mônica Amoroso
                </span>
              </div>

              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className="text-2xl text-gray-400 line-through">R$79</span>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full">
                  <span className="text-3xl font-bold">R$14,90</span>
                </div>
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">81% OFF</div>
              </div>

              <a
                href="https://pay.hotmart.com/K100661881T?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black text-xl px-8 py-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span className="mr-2">Quero aprender agora!</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
              Tecnologia não é só pra jovens.
              <br />
              <span className="text-purple-600">É pra você também.</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-purple-100">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
              Se você tem mais de 50, já deve ter sentido que o mundo digital anda rápido demais. E talvez até pense:{" "}
              <span className="font-semibold text-purple-700">"Será que ainda dá tempo pra mim?"</span>
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center mt-6">
              <span className="font-bold text-green-600">A resposta é: sim. Dá.</span>
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center mt-6">
              Você não precisa entender tudo. Nem acompanhar todo esse ritmo. O que você precisa é de
              <span className="font-semibold text-purple-700"> explicações simples, práticas, no seu tempo.</span>
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center mt-6">
            É por isso que eu criei esse material — pra mostrar que a Inteligência Artificial pode facilitar
              sua vida, sua saúde, sua rotina e até seus momentos em família.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
              O que você vai receber
            </h2>
            <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Tudo que você precisa para dominar a IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-purple-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-2xl">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ebook Completo</h3>
                    <p className="text-gray-700">
                      Inteligência Artificial Descomplicada – guia prático para iniciantes 50+
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-2xl">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2 Aulas em Vídeo</h3>
                    <p className="text-gray-700">Com a Mônica explicando tudo com calma, clareza e carinho</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-green-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-2xl">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Plano de Ação 7 Dias</h3>
                    <p className="text-gray-700">Para você colocar tudo em prática, no seu ritmo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-yellow-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-2xl">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Bônus Especial</h3>
                    <p className="text-gray-700">15 comandos prontos de ChatGPT para usar no dia a dia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl sm:text-2xl italic text-gray-800 leading-relaxed mb-6">
                "Achei que nunca ia entender esse negócio de inteligência artificial. Hoje uso pra me organizar,
                planejar receitas e até cuidar da minha saúde. Me sinto mais segura e atualizada!"
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {/* S */}
                  <img src="/face.jpg" alt="Sandra" className="w-16 h-16 rounded-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Sandra</p>
                  <p className="text-gray-600">63 anos</p>
                </div>
              </div>
              {/* Novo CTA abaixo do depoimento */}
              <div className="mt-8 flex justify-center">
                <a
                  href="https://pay.hotmart.com/K100661881T?checkoutMode=10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs"
                >
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black text-lg font-bold px-6 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105">
                    Quero me sentir Segura e Atualizada
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
              Transforme sua vida digital
            </h2>
            <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Veja o que você vai conquistar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Aprenda no seu ritmo",
                description: "Com explicações simples e didáticas",
                icon: <BookOpen className="w-6 h-6 text-white" />,
              },
              {
                title: "Independência digital",
                description: "Use a IA no seu dia a dia sem depender de ninguém",
                icon: <Sparkles className="w-6 h-6 text-white" />,
              },
              {
                title: "Tecnologia para o bem-estar",
                description: "Cuide da saúde, organize fotos e lembre de compromissos",
                icon: <Check className="w-6 h-6 text-white" />,
              },
              {
                title: "Liberdade e segurança",
                description: "Ganhe autonomia digital com confiança",
                icon: <Star className="w-6 h-6 text-white" />,
              },
              {
                title: "Nova fase da vida",
                description: "Dê o primeiro passo para uma jornada transformadora",
                icon: <ArrowRight className="w-6 h-6 text-white" />,
              },
              {
                title: "Suporte especializado",
                description: "Conte com orientação clara e acolhedora",
                icon: <Video className="w-6 h-6 text-white" />,
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-600 to-purple-700 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-purple-100 leading-relaxed">{benefit.description}</p>
                      <div className="mt-4 flex items-center text-yellow-300 font-medium">
                        <Check className="w-4 h-4 mr-2" />
                        <span className="text-sm">Garantido</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
            Se você chegou até aqui, é porque algo dentro de você
            <span className="text-yellow-300"> quer recomeçar</span>
          </h2>

          <p className="text-xl sm:text-2xl text-purple-100 mb-12 leading-relaxed">
            Com apenas R$14,90, você garante acesso imediato ao eBook + aulas e começa uma nova jornada com mais
            autonomia, clareza e leveza.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 mb-8 border border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-6">
              <span className="text-xl sm:text-2xl text-purple-200 line-through">R$79</span>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                <span className="text-2xl sm:text-3xl font-bold">R$14,90</span>
              </div>
              <div className="bg-red-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold animate-pulse">
                OFERTA LIMITADA
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="https://pay.hotmart.com/K100661881T?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black text-lg sm:text-xl font-bold px-4 sm:px-12 py-5 sm:py-6 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-400/25">
                  <span className="mr-2 sm:mr-3 text-center leading-tight">
                    <span className="block sm:inline">Quero garantir meu acesso</span>
                    <span className="block sm:inline"> por R$14,90</span>
                  </span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                </Button>
              </a>

              <a
                href="https://wa.me/5511989397173"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg sm:text-xl px-4 sm:px-12 py-5 sm:py-6 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Tire suas dúvidas
                </Button>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center space-x-2 bg-gradient-to-br from-emerald-500 to-green-600 text-white px-4 py-3 rounded-xl shadow-lg min-w-0 flex-1 sm:flex-none justify-center">
              <Check className="w-5 h-5 flex-shrink-0" />
              <span className="font-semibold text-sm sm:text-base">Acesso imediato</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-br from-emerald-500 to-green-600 text-white px-4 py-3 rounded-xl shadow-lg min-w-0 flex-1 sm:flex-none justify-center">
              <Star className="w-5 h-5 flex-shrink-0" />
              <span className="font-semibold text-sm sm:text-base">Garantia de 7 dias</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-br from-emerald-500 to-green-600 text-white px-4 py-3 rounded-xl shadow-lg min-w-0 flex-1 sm:flex-none justify-center">
              <Sparkles className="w-5 h-5 flex-shrink-0" />
              <span className="font-semibold text-sm sm:text-base">Suporte completo</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
