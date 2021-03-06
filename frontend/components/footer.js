import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { badgeUrlFromPath } from '../../core/badge-urls/make-badge-url'
import { H2 } from './common'

const SpacedA = styled.a`
  margin-left: 10px;
  margin-right: 10px;
`

export default function Footer({ baseUrl }) {
  return (
    <section>
      <H2 id="like-this">Like This?</H2>

      <p>
        <object
          alt="Follow @shields_io"
          data={badgeUrlFromPath({
            baseUrl,
            path: '/twitter/follow/shields_io',
            queryParams: { label: 'Follow' },
            style: 'social',
          })}
        />{' '}
        {}
        <object
          alt="Donate to us!"
          data={badgeUrlFromPath({
            baseUrl,
            path: '/opencollective/backers/shields',
            queryParams: { link: 'https://opencollective.com/shields' },
            style: 'social',
          })}
        />{' '}
        {}
        <object
          alt="Donate to us!"
          data={badgeUrlFromPath({
            baseUrl,
            path: '/opencollective/sponsors/shields',
            queryParams: { link: 'https://opencollective.com/shields' },
            style: 'social',
          })}
        />{' '}
        {}
        <object
          alt="Fork on GitHub"
          data={badgeUrlFromPath({
            baseUrl,
            path: '/github/forks/badges/shields',
            queryParams: { label: 'Fork' },
            style: 'social',
          })}
        />{' '}
        {}
        <object
          alt="chat on Discord"
          data={badgeUrlFromPath({
            baseUrl,
            path: '/discord/308323056592486420',
            queryParams: {
              label: 'Chat',
              link: 'https://discord.gg/HjJCwm5',
            },
            style: 'social',
          })}
        />
      </p>

      <p>
        What is your favorite badge service to use?
        <br />
        <a href="https://github.com/badges/shields/blob/master/CONTRIBUTING.md">
          Tell us
        </a>{' '}
        and we might bring it to you!
      </p>

      <p>
        <SpacedA href="https://status.shields.io/">Status</SpacedA>
        <SpacedA href="https://github.com/badges/shields">GitHub</SpacedA>
      </p>
    </section>
  )
}
Footer.propTypes = {
  baseUrl: PropTypes.string.isRequired,
}
