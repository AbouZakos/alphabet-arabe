'use client'

import { useState } from 'react'
import Script from 'next/script'

const QUESTIONS = [
  {
    q: "Combien de lettres dans l'alphabet arabe ?",
    a: "L'alphabet arabe compte 29 lettres, toutes consonantiques. L'arabe est une langue sémitique et langue officielle dans 22 pays arabes — du Maghreb au Moyen-Orient. Contrairement à l'alphabet latin ou à l'alphabet phonétique, l'écriture arabe ne note pas les voyelles brèves dans les textes courants. Les voyelles longues et les voyelles courtes (appelées harakat) sont indiquées par des signes diacritiques, surtout dans le Coran et les livres pour enfants.",
  },
  {
    q: "L'alphabet arabe est-il difficile à apprendre ?",
    a: "Non — apprendre l'arabe est plus accessible qu'il n'y paraît pour un débutant francophone. La mémorisation des 29 lettres prend 1 à 2 semaines avec une pratique régulière. La principale difficulté vient de l'écriture cursive : les caractères arabes sont liés entre eux et chaque lettre change de forme selon sa position. L'arabe standard moderne, utilisé dans les médias et l'enseignement, est la forme la plus utile pour débuter l'apprentissage de la langue arabe.",
  },
  {
    q: "Dans quel sens s'écrit l'arabe ?",
    a: "L'arabe s'écrit et se lit de droite à gauche — c'est l'inverse de l'alphabet latin. Ce système d'écriture est commun à toutes les langues utilisant l'alphabet arabe. Pour un arabophone ou un apprenant francophone, cette direction s'acquiert naturellement après quelques heures de pratique. L'arabe est parlé par plus de 400 millions de locuteurs dans le monde arabe, en Afrique du Nord, au Maghreb et au Moyen-Orient.",
  },
  {
    q: "Qu'est-ce que les formes début, milieu, fin en arabe ?",
    a: "En arabe, chaque lettre peut prendre jusqu'à 4 formes différentes selon sa position dans le mot : isolée, initiale, médiane et finale. Par exemple, la lettre Ba s'écrit différemment selon qu'elle se trouve au début, au milieu ou à la fin d'un mot. Apprendre ces formes est indispensable pour lire un texte arabe et écrire en arabe correctement. Certaines lettres comme le Ra ou le Waw ne se lient qu'à gauche — elles ont seulement 2 formes.",
  },
  {
    q: "Quelle est la différence entre l'arabe et le français pour les voyelles ?",
    a: "En français, les voyelles font partie de l'alphabet. En arabe, les voyelles courtes ne s'écrivent pas dans les textes courants — elles sont représentées par des petits signes diacritiques utilisés principalement dans le Coran et les livres pour enfants. L'arabe possède aussi des voyelles longues (alif, waw, ya) qui font partie intégrante des mots arabes. C'est pourquoi apprendre la prononciation et la transcription phonétique est essentiel dès le début de l'apprentissage de l'arabe.",
  },
  {
    q: "Comment apprendre à écrire l'alphabet arabe rapidement ?",
    a: "La méthode la plus efficace pour apprendre la langue arabe est de travailler lettre par lettre : d'abord la forme isolée, puis les formes liées. Nos cartes PDF gratuites permettent de mémoriser rapidement les 29 lettres et leur transcription phonétique. Une fois l'alphabet maîtrisé, vous pouvez commencer à lire des phrases en arabe, enrichir votre vocabulaire arabe et aborder la grammaire arabe. 15 minutes par jour suffisent pour progresser visiblement en 2 semaines. Pour aller plus loin, un cours de langue avec un professeur natif reste la voie la plus rapide.",
  },
]

export default function FAQ() {
  const [ouvert, setOuvert] = useState<number | null>(null)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: QUESTIONS.map((q) => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.a,
      },
    })),
  }

  return (
    <section className="bg-albatre py-20 px-4 sm:px-8">
      <Script
        id="jsonld-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto">

        {/* En-tête */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="block w-6 h-px bg-or" />
            <span className="text-or text-xs font-sans uppercase tracking-[0.2em]">
              Questions fréquentes
            </span>
          </div>
          <h2 className="font-serif text-nuit text-3xl sm:text-4xl font-bold leading-tight">
            Tout savoir sur l&apos;alphabet arabe
          </h2>
        </div>

        {/* Accordéon */}
        <div className="flex flex-col gap-2">
          {QUESTIONS.map((item, i) => (
            <div
              key={i}
              className="border border-bordure rounded-xl overflow-hidden
                         transition-all duration-200 bg-white"
            >
              {/* Question — bouton */}
              <button
                className="w-full flex items-center justify-between
                           px-6 py-5 text-left gap-4
                           hover:bg-nuit/[0.02] transition-colors duration-150"
                onClick={() => setOuvert(ouvert === i ? null : i)}
                aria-expanded={ouvert === i}
              >
                <h3 className="font-serif text-nuit text-base sm:text-lg
                               font-bold leading-snug">
                  {item.q}
                </h3>
                {/* Icône + / × */}
                <span
                  className={`shrink-0 w-7 h-7 rounded-full border border-or/30
                              flex items-center justify-center
                              text-or font-sans text-lg font-light
                              transition-all duration-300
                              ${ouvert === i ? 'rotate-45 bg-or text-nuit border-or' : ''}`}
                >
                  +
                </span>
              </button>

              {/* Réponse — panel */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out
                            ${ouvert === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 border-t border-bordure/50">
                  <p className="text-nuit/65 font-sans text-sm sm:text-base
                                leading-relaxed pt-4">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
