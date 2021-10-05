export enum Colors {
  black = '\x1b[30m',
  red = '\x1b[31m',
  green = '\x1b[32m',
  yellow = '\x1b[33m',
  blue = '\x1b[34m',
  magenta = '\x1b[35m',
  cyan = '\x1b[36m',
  white = '\x1b[37m',
  bgBlack = '\x1b[40m',
  bgRed = '\x1b[41m',
  bgGreen = '\x1b[42m',
  bgYellow = '\x1b[43m',
  bgBlue = '\x1b[44m',
  bgMagenta = '\x1b[45m',
  bgCyan = '\x1b[46m',
  bgWhite = '\x1b[47m'
}

export const fg = {
  black: (...args: string[]) => `${Colors.black}${args.join(' ')}`,
  red: (...args: string[]) => `${Colors.red}${args.join(' ')}`,
  green: (...args: string[]) => `${Colors.green}${args.join(' ')}`,
  yellow: (...args: string[]) => `${Colors.yellow}${args.join(' ')}`,
  blue: (...args: string[]) => `${Colors.blue}${args.join(' ')}`,
  magenta: (...args: string[]) => `${Colors.magenta}${args.join(' ')}`,
  cyan: (...args: string[]) => `${Colors.cyan}${args.join(' ')}`,
  white: (...args: string[]) => `${Colors.white}${args.join(' ')}`
}

export const bg = {
  black: (...args: string[]) => `${Colors.bgBlack}${args.join(' ')}\x1b[0m`,
  red: (...args: string[]) => `${Colors.bgRed}${args.join(' ')}\x1b[0m`,
  green: (...args: string[]) => `${Colors.bgGreen}${args.join(' ')}\x1b[0m`,
  yellow: (...args: string[]) => `${Colors.bgYellow}${args.join(' ')}\x1b[0m`,
  blue: (...args: string[]) => `${Colors.bgBlue}${args.join(' ')}\x1b[0m`,
  magenta: (...args: string[]) => `${Colors.bgMagenta}${args.join(' ')}\x1b[0m`,
  cyan: (...args: string[]) => `${Colors.bgCyan}${args.join(' ')}\x1b[0m`,
  white: (...args: string[]) => `${Colors.bgWhite}${args.join(' ')}\x1b[0m`
}

function testForegroundColors() {
  console.log(fg.black('Testing black foreground colorization.'))
  console.log(fg.red('Testing red foreground colorization.'))
  console.log(fg.green('Testing green foreground colorization.'))
  console.log(fg.yellow('Testing yellow foreground colorization.'))
  console.log(fg.blue('Testing blue foreground colorization.'))
  console.log(fg.magenta('Testing magenta foreground colorization.'))
  console.log(fg.cyan('Testing cyan foreground colorization.'))
  console.log(fg.white('Testing white foreground colorization.'))
}

function testBackgroundColors() {
  console.log(bg.black('Testing black background colorization.'))
  console.log(bg.red('Testing red background colorization.'))
  console.log(bg.green('Testing green background colorization.'))
  console.log(bg.yellow('Testing yellow background colorization.'))
  console.log(bg.blue('Testing blue background colorization.'))
  console.log(bg.magenta('Testing magenta background colorization.'))
  console.log(bg.cyan('Testing cyan background colorization.'))
  console.log(bg.white('Testing white background colorization.'))
}

function main() {
  console.log('Testing foreground colors:')
  testForegroundColors()

  console.log('\n')

  console.log('Testing background colors:')
  testBackgroundColors()
}

main()
