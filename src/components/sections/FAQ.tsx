'use client'

import { useState } from 'react'
import Script from 'next/script'

const QUESTIONS = [
  {
    q: "Combien de lettres dans l'alphabet arabe ?",
    a: "L'alphabet arabe compte 29 lettres. Contrairement à l'alphabet latin, toutes les lettres arabes sont des consonnes. Les voyelles courtes sont représentées par des signes diacritiques placés au-dessus ou en-dessous des lettres.",
  },
  {
    q: "L'alphabet arabe est-il difficile à apprendre ?",
    a: "Non — l'alphabet arabe est plus accessible qu'il n'y paraît. Avec une pratique quotidienne de 15 à 20 minutes, la plupart des débutants reconnaissent les 29 lettres en 1 à 2 semaines. La principale difficulté réside dans les lettres qui changent de forme selon leur position dans le mot.",
  },
  {
    q: "Dans quel sens s'écrit l'arabe ?",
    a: "L'arabe s'écrit et se lit de droite à gauche. C'est l'inverse de l'alphabet latin. Cette direction d'écriture est commune à toutes les langues qui utilisent l'alphabet arabe : arabe, persan, ourdou, etc.",
  },
  {
    q: "Qu'est-ce que les formes début, milieu, fin en arabe ?",
    a: "En arabe, chaque lettre peut prendre jusqu'à 4 formes différentes selon sa position dans le mot : isolée (seule), initiale (début du mot), médiane (milieu) et finale (fin du mot). Par exemple, la lettre Ba (ب) s'écrit différemment selon qu'elle se trouve au début, au milieu ou à la fin d'un mot. Apprendre ces formes est indispensable pour lire et écrire correctement.",
  },
  {
    q: "Quelle est la différence entre l'arabe et le français pour les voyelles ?",
    a: "En français, les voyelles (a, e, i, o, u) font partie de l'alphabet. En arabe, les voyelles courtes ne s'écrivent pas dans les textes courants — elles sont représentées par des petits signes diacritiques (harakat) utilisés principalement dans le Coran et les livres pour enfants. C'est pourquoi apprendre la prononciation est essentiel dès le début.",
  },
  {
    q: "Comment apprendre à écrire l'alphabet arabe rapidement ?",
    a: "La méthode la plus efficace est de travailler lettre par lettre, en apprenant d'abord la forme isolée, puis les formes liées. Nos cartes PDF à télécharger gratuitement sont idéales pour mémoriser rapidement les 29 lettres : recto pour la lettre, verso pour la phonétique. Une pratique de 15 minutes par jour suffit pour progresser visiblement en 2 semaines.",
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
