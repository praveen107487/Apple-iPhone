import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-xs">
      <div className="screen-max-width px-6 sm:px-10 py-12">

        {/* Shop Info */}
        <div className="space-y-2">
          <p>
            More ways to shop:{' '}
            <span className="text-blue-500 underline cursor-pointer">
              Find an Apple Store
            </span>{' '}
            or{' '}
            <span className="text-blue-500 underline cursor-pointer">
              other retailer
            </span>{' '}
            near you.
          </p>
          <p>Or call 000800-040-1966</p>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

          <p className="text-gray-500">
            Copyright © 2024 Apple Inc. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <span
                key={link}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {link}
              </span>
            ))}
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer