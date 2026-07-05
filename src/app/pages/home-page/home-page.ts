import { afterNextRender, Component, effect, signal } from '@angular/core';
import { Title } from '../../components/title/title';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')}`,
    'color: #bada55; font-weight: bold;',
  );
};
@Component({
  selector: 'app-home-page',
  imports: [Title],
  templateUrl: './home-page.html',
})
export class HomePage {
  traditionalProperty = 'Francisco';
  signalProperty = signal('Francisco');

  cambiarSignal() {
    this.signalProperty.set('Francisco Morales');
  }

  cambiarTradicional() {
    this.traditionalProperty = 'Francisco Morales';
  }

  constructor() {
    log('constructor llamado');
  }

  basicEffect = effect((onCleanup) => {
    log(
      'basicEffect llamado',
      "Runs every time the component's state changes. It's a good place to put logic that depends on reactive state.",
    );

    onCleanup(() => {
      log(
        'basicEffect cleanup llamado',
        "Runs when the component is destroyed or when the effect is re-run. It's a good place to put cleanup logic.",
      );
    });
  });

  ngOnInit() {
    log(
      'ngOnInit llamado',
      "Runs once the component is initialized. It's a good place to put initialization logic.",
    );
  }

  ngOnChanges() {
    log('ngOnChanges llamado', "Runs every time the component's inputs have changed.");
  }

  ngDoCheck() {
    log('ngDoCheck llamado', 'Runs every time the component is checked for changes.');
  }

  ngAfterContentInit() {
    log(
      'ngAfterContentInit llamado',
      "Runs once after the component's content has been initialized.",
    );
  }

  ngAfterContentChecked() {
    log(
      'ngAfterContentChecked llamado',
      "Runs every time the component's content has been checked.",
    );
  }

  ngAfterViewInit() {
    log('ngAfterViewInit llamado', "Runs once after the component's view has been initialized.");
  }

  ngAfterViewChecked() {
    log('ngAfterViewChecked llamado', "Runs every time the component's view has been checked.");
  }

  ngOnDestroy() {
    log('ngOnDestroy llamado', 'Runs once the component is about to be destroyed.');
  }

  afterNextRenderEffect = afterNextRender(() => {
    log(
      'afterNextRenderEffect llamado',
      "Runs after the next render cycle. It's a good place to put logic that depends on the DOM being updated.",
    );
  });
}
