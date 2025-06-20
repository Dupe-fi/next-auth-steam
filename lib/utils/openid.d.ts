import type { NextApiRequest } from 'next';
/**
 * Claims the identity by verifying the assertion and extracting the claimed identifier.
 * Uses the `verifyAssertion` method to validate the identity.
 */
export declare function claimIdentity(request: Request | NextApiRequest, realm: string, returnTo: string): Promise<string>;
/**
 * Verifies the OpenID assertion by validating the identity and verifying the assertion with the relying party.
 * Based on the logic from this PR: https://github.com/liamcurry/passport-steam/pull/120
 * and copied from this library: https://github.com/liamcurry/passport-steam/blob/dcebba52d02ce2a12c7d27481490c4ee0bd1ae38/lib/passport-steam/strategy.js#L93
 */
export declare function verifyAssertion(request: Request | NextApiRequest, realm: string, returnTo: string): Promise<string>;
