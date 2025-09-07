'use client'


import React, { useState } from 'react';
import { Star, TrendingUp, TrendingDown, Heart, ShoppingBag, Sparkles } from 'lucide-react';
import { useTheme } from './context/ThemeContext';
import { Moon, Sun } from 'lucide-react';


const FashionTrendApp = () => {
  const { isDark, toggleTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('etekler');
  
  const categories = [
    { id: 'etekler', name: 'Etekler', icon: '👗' },
    { id: 'ustler', name: 'Üstler', icon: '👚' },
    { id: 'pantolonlar', name: 'Pantolonlar', icon: '👖' },
    { id: 'elbiseler', name: 'Elbiseler', icon: '💃' },
    { id: 'ayakkabilar', name: 'Ayakkabılar', icon: '👠' },
    { id: 'cantalar', name: 'Çantalar', icon: '👜' },
    { id: 'aksesuarlar', name: 'Aksesuarlar', icon: '💎' },
    { id: 'disgiysiler', name: 'Dış Giysiler', icon: '🧥' },
    { id: 'mayo', name: 'Mayo & Bikini', icon: '👙' },
    { id: 'icgiysiler', name: 'İç Giysiler', icon: '🩱' }
  ];

  const trendData = {
    etekler: [
      { 
        name: 'Şort Etekler (Önden-Arkadan Etek Görünümlü)', 
        trendScore: 95, 
        status: 'hot',
        description: 'Rahat şort konforu, etek şıklığı! Çok trend!',
        combinations: ['Crop top + sneaker', 'Blazer + topuklu ayakkabı', 'Oversize gömlek + sandalet']
      },
      { 
        name: 'Kalem Etekler', 
        trendScore: 15, 
        status: 'cold',
        description: 'Artık pek tercih edilmiyor, ofis dışında nadir.',
        combinations: ['Klasik gömlek + stiletto', 'Fitted bluz + loafer']
      },
      { 
        name: 'Pliseli Mini Etekler', 
        trendScore: 82, 
        status: 'trending',
        description: 'Y2K akımıyla geri döndü, çok seviliyor!',
        combinations: ['Crop cardigan + platform ayakkabı', 'Baby tee + çizme']
      },
      { 
        name: 'Asimetrik Etekler', 
        trendScore: 73, 
        status: 'trending',
        description: 'Modern ve şık, dikkat çeken tasarım.',
        combinations: ['Fitted top + ankle boots', 'Blazer + sneaker']
      },
      { 
        name: 'Kargo Etekler', 
        trendScore: 88, 
        status: 'hot',
        description: 'Utilitarian trend ile birlikte çok popüler!',
        combinations: ['Tank top + combat boots', 'Hoodie + chunky sneaker']
      }
    ],
    ustler: [
      { 
        name: 'Baby Tees', 
        trendScore: 92, 
        status: 'hot',
        description: 'Slim fit, kısa kesim tişörtler çok trend!',
        combinations: ['High waist jean + sneaker', 'Mini etek + platform']
      },
      { 
        name: 'Oversize Blazerlar', 
        trendScore: 85, 
        status: 'trending',
        description: 'Güç omuzları ve rahat kesim popüler.',
        combinations: ['Skinny jean + loafer', 'Biker short + çizme']
      },
      { 
        name: 'Mesh Toplar', 
        trendScore: 78, 
        status: 'trending',
        description: 'Şeffaf detaylar ve katmanlama trendi.',
        combinations: ['Bralette + cargo pantolon', 'Tank top + mini etek']
      },
      { 
        name: 'Halter Neck Toplar', 
        trendScore: 71, 
        status: 'trending',
        description: 'Boyun dekolteli, retro feeling.',
        combinations: ['Wide leg pantolon + sandalet', 'A-line etek + wedge']
      }
    ],
    pantolonlar: [
      { 
        name: 'Cargo Pantolonlar', 
        trendScore: 89, 
        status: 'hot',
        description: 'Utilitarian trend ile birlikte çok popüler!',
        combinations: ['Fitted top + chunky sneaker', 'Crop hoodie + boots']
      },
      { 
        name: 'Wide Leg Jeans', 
        trendScore: 86, 
        status: 'trending',
        description: '90lar nostaljisi ile geri döndü.',
        combinations: ['Fitted tee + platform', 'Blazer + loafer']
      },
      { 
        name: 'Skinny Jeans', 
        trendScore: 25, 
        status: 'cold',
        description: 'Artık pek tercih edilmiyor.',
        combinations: ['Oversize gömlek + ankle boots']
      },
      { 
        name: 'Parachute Pants', 
        trendScore: 81, 
        status: 'trending',
        description: 'Y2K trendi ile birlikte popüler.',
        combinations: ['Crop top + chunky sneaker', 'Baby tee + platform']
      }
    ],
    elbiseler: [
      { 
        name: 'Slip Dress', 
        trendScore: 88, 
        status: 'hot',
        description: 'Minimalist şıklık, her duruma uygun.',
        combinations: ['Denim jacket + sneaker', 'Blazer + sandalet']
      },
      { 
        name: 'Cut-out Elbiseler', 
        trendScore: 79, 
        status: 'trending',
        description: 'Kesim detayları ile dikkat çekici.',
        combinations: ['Minimal aksesuar + strappy sandals']
      },
      { 
        name: 'Maxi Elbiseler', 
        trendScore: 74, 
        status: 'trending',
        description: 'Bohemian tarzda uzun elbiseler.',
        combinations: ['Denim jacket + boots', 'Cardigan + sandalet']
      }
    ],
    ayakkabilar: [
      { 
        name: 'Chunky Sneakerlar', 
        trendScore: 91, 
        status: 'hot',
        description: 'Kalın tabanlar ve retro tasarım çok trend!',
        combinations: ['Her tarzla uyumlu, casual chic']
      },
      { 
        name: 'Platform Sandalet', 
        trendScore: 87, 
        status: 'trending',
        description: 'Yükseklik veren, rahat platform tabanlar.',
        combinations: ['Mini elbise', 'Şort kombin', 'Crop top sets']
      },
      { 
        name: 'Combat Boots', 
        trendScore: 83, 
        status: 'trending',
        description: 'Grunge ve utilitarian trendlerle popüler.',
        combinations: ['Feminine pieces ile kontrast yaratma']
      },
      { 
        name: 'Stiletto', 
        trendScore: 35, 
        status: 'cold',
        description: 'Artık sadece özel günlerde tercih ediliyor.',
        combinations: ['Klasik kombinler için']
      }
    ],
    cantalar: [
      { 
        name: 'Mini Bag', 
        trendScore: 89, 
        status: 'hot',
        description: 'Küçük boyutlu, statement çantalar çok trend!',
        combinations: ['Evening looks', 'Minimalist outfits']
      },
      { 
        name: 'Belt Bag (Bel Çantası)', 
        trendScore: 85, 
        status: 'trending',
        description: 'Pratik kullanım, street style favorisi.',
        combinations: ['Casual kombinler', 'Sporty chic looks']
      },
      { 
        name: 'Oversized Tote', 
        trendScore: 76, 
        status: 'trending',
        description: 'Büyük boy, günlük kullanım için ideal.',
        combinations: ['Office looks', 'Casual day outfits']
      }
    ],
    aksesuarlar: [
      { 
        name: 'Chunky Altın Zincirleri', 
        trendScore: 93, 
        status: 'hot',
        description: 'Kalın altın renkli zincirler çok popüler!',
        combinations: ['Layering için mükemmel', 'Minimal outfits ile']
      },
      { 
        name: 'Hair Claws', 
        trendScore: 87, 
        status: 'trending',
        description: 'Pratik saç aksesuarları trend.',
        combinations: ['Casual looks', 'Messy bun styles']
      },
      { 
        name: 'Büyük Küpeler', 
        trendScore: 81, 
        status: 'trending',
        description: 'Statement küpeler dikkat çekiyor.',
        combinations: ['Simple outfits ile balance yaratma']
      }
    ],
    disgiysiler: [
      { 
        name: 'Oversize Denim Jacket', 
        trendScore: 88, 
        status: 'hot',
        description: 'Vintage kesim kot ceketler çok trend!',
        combinations: ['Dress over', 'Layering piece olarak']
      },
      { 
        name: 'Cropped Blazer', 
        trendScore: 84, 
        status: 'trending',
        description: 'Kısa kesim blazerlar modern görünüm.',
        combinations: ['High waist bottoms ile']
      },
      { 
        name: 'Puffer Vest', 
        trendScore: 79, 
        status: 'trending',
        description: 'Kolsuz şişme yelek, katmanlama için.',
        combinations: ['Long sleeve tops ile layering']
      }
    ],
    mayo: [
      { 
        name: 'High-Cut Bikini', 
        trendScore: 90, 
        status: 'hot',
        description: 'Yüksek kesim alt, bacakları uzun gösterir.',
        combinations: ['Beach cover-ups', 'Kimono ile']
      },
      { 
        name: 'One-Shoulder Mayo', 
        trendScore: 85, 
        status: 'trending',
        description: 'Tek omuz detaylı mayolar çok şık.',
        combinations: ['Pareo ile', 'Beach accessories']
      },
      { 
        name: 'Cut-out Mayo', 
        trendScore: 82, 
        status: 'trending',
        description: 'Kesim detaylı, modern mayolar.',
        combinations: ['Minimal beach styling']
      }
    ],
    icgiysiler: [
      { 
        name: 'Bralette', 
        trendScore: 91, 
        status: 'hot',
        description: 'Rahat, wire-free sutyen alternatifleri trend!',
        combinations: ['Layering piece olarak', 'Crop top gibi']
      },
      { 
        name: 'Seamless İç Giyim', 
        trendScore: 86, 
        status: 'trending',
        description: 'Dikişsiz, görünmez iç giyim popüler.',
        combinations: ['Tight fitting clothes altında']
      },
      { 
        name: 'High-Waist Shapewear', 
        trendScore: 83, 
        status: 'trending',
        description: 'Yüksek bel, şekillendirici iç giyim.',
        combinations: ['Body-con outfits ile']
      }
    ]
  };


  const getTrendIcon = (status: string) => {
    switch(status) {
      case 'hot': return <TrendingUp className="w-5 h-5 text-red-500" />;
      case 'trending': return <TrendingUp className="w-5 h-5 text-orange-500" />;
      case 'cold': return <TrendingDown className="w-5 h-5 text-blue-400" />;
      default: return null;
    }
  };

  const getTrendColor = (score: number) => {
    if (score >= 85) return 'bg-gradient-to-r from-red-400 to-pink-500';
    if (score >= 70) return 'bg-gradient-to-r from-orange-400 to-yellow-500';
    return 'bg-gradient-to-r from-blue-400 to-blue-300';
  };

  const getScoreText = (score: number) => {
    if (score >= 85) return 'ÇOK TREND! 🔥';
    if (score >= 70) return 'Trend ↗️';
    return 'Düşük Trend ↘️';
  };

  return (
    
    <div className={`min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 ${isDark ? 'dark' : ''}`}>
  {/* Header */}
  <div className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-pink-500" />
          Fashion Trends
        </h1>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            {isDark ? (
              <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
              <Moon className="w-6 h-6 text-purple-400" />
            )}
          </button>
          <Heart className="w-6 h-6 text-pink-400 cursor-pointer hover:text-pink-600" />
          <ShoppingBag className="w-6 h-6 text-purple-400 cursor-pointer hover:text-purple-600" />
        </div>
      </div>
    </div>
  </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Kategoriler</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-2xl text-center transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white/70 hover:bg-white/90 text-gray-700 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium">{category.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Trends */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">
            {categories.find(c => c.id === selectedCategory)?.name} Trendleri
          </h2>
          
          <div className="grid gap-6">
            {trendData[selectedCategory as keyof typeof trendData]?.map((item, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                        {getTrendIcon(item.status)}
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    </div>
                    <div className="text-center ml-4">
                      <div className={`px-4 py-2 rounded-full text-white text-sm font-bold ${getTrendColor(item.trendScore)}`}>
                        {item.trendScore}
                      </div>
                      <div className="text-xs mt-1 font-medium text-gray-600">
                        {getScoreText(item.trendScore)}
                      </div>
                    </div>
                  </div>

                  {/* Trend Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div 
                      className={`h-3 rounded-full transition-all duration-1000 ${getTrendColor(item.trendScore)}`}
                      style={{ width: `${item.trendScore}%` }}
                    ></div>
                  </div>

                  {/* Combinations */}
                  {item.trendScore >= 70 && (
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4 mt-4">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        Kombin Önerileri
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {item.combinations?.map((combo, idx) => (
                          <div key={idx} className="bg-white/70 rounded-xl px-3 py-2 text-sm text-gray-700 font-medium">
                            {combo}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trend Summary */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-6 text-white">
          <h3 className="text-xl font-bold mb-3">💫 Bu Haftanın Trend Özeti</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/20 rounded-2xl p-4">
              <div className="text-2xl font-bold">
                {trendData[selectedCategory as keyof typeof trendData]?.filter(item => item.trendScore >= 85).length || 0}
              </div>
              <div className="text-sm">Çok Trend</div>
            </div>
            <div className="bg-white/20 rounded-2xl p-4">
              <div className="text-2xl font-bold">
                {trendData[selectedCategory as keyof typeof trendData]?.filter(item => item.trendScore >= 70 && item.trendScore < 85).length || 0}
              </div>
              <div className="text-sm">Yükselişte</div>
            </div>
            <div className="bg-white/20 rounded-2xl p-4">
              <div className="text-2xl font-bold">
                {trendData[selectedCategory as keyof typeof trendData]?.filter(item => item.trendScore < 70).length || 0}
              </div>
              <div className="text-sm">Düşük Trend</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionTrendApp;