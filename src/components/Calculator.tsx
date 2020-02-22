import styles from './Calculator.css?module';
import { Component} from 'vue-property-decorator';

import { VueComponent } from '@/shims-vue';


@Component  
export default class Calculator extends VueComponent {
  formula: string = ''
  result: string = '0'
  isProccessing: boolean = false

  private calculate(): void {
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

  private inputToFormula(e: Event): void {
    if (this.isProccessing) return

    const target: any = e.target
    const formulaInputValue: string = target.dataset.value

    const signs: string[] = ['+', '-']

    if (signs.includes(this.formula[this.formula.length - 2]) && signs.includes(formulaInputValue)) return

    if (signs.includes(formulaInputValue)) this.formula += ` ${formulaInputValue} `
    else this.formula += formulaInputValue
  }

  public render(): JSX.Element {
    return (
      <div class={styles.calculator}>
        <div class={styles.display}>{
          this.formula.split(' ')
          .map(str => (<span class={styles.formula}> {str}</span>))
        }</div>
        <div class={styles.display}>{this.result && `= ${this.result}`}</div>
        <div class={styles.btn} role="button" data-value="7" onClick={this.inputToFormula}>7</div>
        <div class={styles.btn} role="button" data-value="8" onClick={this.inputToFormula}>8</div>
        <div class={styles.btn} role="button" data-value="9" onClick={this.inputToFormula}>9</div>
        <div class={styles.btnOperator} role="button" onClick={this.clean}>C</div>
        <div class={styles.btn} role="button" data-value="4" onClick={this.inputToFormula}>4</div>
        <div class={styles.btn} role="button" data-value="5" onClick={this.inputToFormula}>5</div>
        <div class={styles.btn} role="button" data-value="6" onClick={this.inputToFormula}>6</div>
        <div class={styles.btnOperator} role="button" data-value="-" onClick={this.inputToFormula}>-</div>
        <div class={styles.btn} role="button" data-value="1" onClick={this.inputToFormula}>1</div>
        <div class={styles.btn} role="button" data-value="2" onClick={this.inputToFormula}>2</div>
        <div class={styles.btn} role="button" data-value="3" onClick={this.inputToFormula}>3</div>
        <div class={styles.btnOperator} role="button" data-value="+" onClick={this.inputToFormula}>+</div>
        <div class={styles.btnZero} role="button" data-value="0" onClick={this.inputToFormula}>0</div>
        <div class={styles.btnOperator} role="button" onClick={this.calculate}>=</div>
      </div>
    )
  }
}