import styles from './Calculator.css?module';
import { Component} from 'vue-property-decorator';

import { VueComponent } from '@/shims-vue';


@Component  
export default class Calculator extends VueComponent {
  formula: string = ''
  result: string = '0'
  isProccessing: boolean = false

  private calculate(): void {
    if (!this.formula) return

    this.isProccessing = true
    setTimeout(() => {
      this.result = String(eval(this.formula))
      this.formula = this.result
      this.isProccessing = false
    }, 2000)
  }

  private clean(): void {
    this.formula = ''
    this.result = '0'
  }

  private inputToFormula(formulaInputValue: string): Function {
    return (e: MouseEvent) => {
      if (this.isProccessing) return
      
      const signs: string[] = ['+', '-']
  
      if (!this.formula && signs.includes(formulaInputValue)) return
      
      if (signs.includes(this.formula[this.formula.length - 2]) && signs.includes(formulaInputValue)) return
  
      if (signs.includes(formulaInputValue)) this.formula += ` ${formulaInputValue} `
      else this.formula += formulaInputValue
    }
  }

  public render(): JSX.Element {
    return (
      <div class={styles.calculator} tabindex="0">
        <div class={styles.display} tabindex="0">{
          this.formula.split(' ')
          .map(str => (<span class={styles.formula}> {str}</span>))
        }</div>
        <div class={styles.display} tabindex="0">{this.result && `= ${this.result}`}</div>
        <button class={styles.btn} tabindex="0" aria-label="Sevent" onClick={this.inputToFormula('7')}>7</button>
        <button class={styles.btn} tabindex="0" aria-label="Eight" onClick={this.inputToFormula('8')}>8</button>
        <button class={styles.btn} tabindex="0" aria-label="Nine" onClick={this.inputToFormula('9')}>9</button>
        <button class={styles.btnOperator} tabindex="0" aria-label="Clean input" onClick={this.clean}>C</button>
        <button class={styles.btn} tabindex="0" aria-label="Four" onClick={this.inputToFormula('4')}>4</button>
        <button class={styles.btn} tabindex="0" aria-label="Five" onClick={this.inputToFormula('5')}>5</button>
        <button class={styles.btn} tabindex="0" aria-label="Six" onClick={this.inputToFormula('6')}>6</button>
        <button class={styles.btnOperator} tabindex="0" aria-label="Mines" onClick={this.inputToFormula('-')}>-</button>
        <button class={styles.btn} tabindex="0" aria-label="One" onClick={this.inputToFormula('1')}>1</button>
        <button class={styles.btn} tabindex="0" aria-label="Two" onClick={this.inputToFormula('2')}>2</button>
        <button class={styles.btn} tabindex="0" aria-label="Three"onClick={this.inputToFormula('3')}>3</button>
        <button class={styles.btnOperator} tabindex="0" aria-label="Plus" onClick={this.inputToFormula('+')}>+</button>
        <button class={styles.btnZero} tabindex="0" ariaonClick={this.inputToFormula('0')}>0</button>
        <button class={styles.btnOperator} tabindex="0" onClick={this.calculate}>=</button>
      </div>
    )
  }
}