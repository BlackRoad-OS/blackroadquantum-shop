// © 2026 BlackRoad OS, Inc. — Proprietary. All rights reserved.
import type { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Only allow contributors who have been granted access via the converter API
      const allowed = process.env.ALLOWED_CONTRIBUTOR_EMAILS?.split(',').map((e) => e.trim()) ?? []
      if (allowed.length > 0 && !allowed.includes(user.email ?? '')) {
        return false
      }
      return true
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        ;(session.user as typeof session.user & { id: string }).id = token.sub
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
}
