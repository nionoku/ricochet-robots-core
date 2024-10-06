import tokensInfo from '../assets/tokens.json';
import { IController } from './types/controller';
import { Token } from '../models/token';
import { TokenInfo } from '../models/types/token';

class TokensController implements IController {
  private readonly _tokens: Token[];

  constructor() {
    const tokens = tokensInfo.flatMap((info) => {
      const token = new Token(info as TokenInfo);

      return token;
    });

    this._tokens = tokens;
  }

  get objects(): Token[] {
    return this._tokens;
  }
}

export {
  TokensController,
};