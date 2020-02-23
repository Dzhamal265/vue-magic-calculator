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

  private inputToFormula(e: Event): void {
    if (this.isProccessing) return
    
    const target: any = e.target
    const formulaInputValue: string = target.dataset.value
    
    const signs: string[] = ['+', '-']

    if (!this.formula && signs.includes(formulaInputValue)) return
    
    if (signs.includes(this.formula[this.formula.length - 2]) && signs.includes(formulaInputValue)) return

    if (signs.includes(formulaInputValue)) this.formula += ` ${formulaInputValue} `
    else this.formula += formulaInputValue
  }

  public render(): JSX.Element {
    return (
      <div class={styles.calculator} tabindex="0">
        <div class={styles.display} tabindex="0">{
          this.formula.split(' ')
          .map(str => (<span class={styles.formula}> {str}</span>))
        }</div>
        <div class={styles.display} tabindex="0">{this.result && `= ${this.result}`}</div>
        <button class={styles.btn} tabindex="0" data-value="7" onClick={this.inputToFormula}>7</button>
        <button class={styles.btn} tabindex="0" data-value="8" onClick={this.inputToFormula}>8</button>
        <button class={styles.btn} tabindex="0" data-value="9" onClick={this.inputToFormula}>9</button>
        <button class={styles.btnOperator} tabindex="0" onClick={this.clean}>C</button>
        <button class={styles.btn} tabindex="0" data-value="4" onClick={this.inputToFormula}>4</button>
        <button class={styles.btn} tabindex="0" data-value="5" onClick={this.inputToFormula}>5</button>
        <button class={styles.btn} tabindex="0" data-value="6" onClick={this.inputToFormula}>6</button>
        <button class={styles.btnOperator} tabindex="0" data-value="-" onClick={this.inputToFormula}>-</button>
        <button class={styles.btn} tabindex="0" data-value="1" onClick={this.inputToFormula}>1</button>
        <button class={styles.btn} tabindex="0" data-value="2" onClick={this.inputToFormula}>2</button>
        <button class={styles.btn} tabindex="0" data-value="3" onClick={this.inputToFormula}>3</button>
        <button class={styles.btnOperator} tabindex="0" data-value="+" onClick={this.inputToFormula}>+</button>
        <button class={styles.btnZero} tabindex="0" data-value="0" onClick={this.inputToFormula}>0</button>
        <button class={styles.btnOperator} tabindex="0" onClick={this.calculate}>=</button>
      </div>
    )
  }
}