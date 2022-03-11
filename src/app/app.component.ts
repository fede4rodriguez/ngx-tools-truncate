import { Component } from '@angular/core';
import { TruncateService } from '@ngx-tools/truncate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  text: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione dignissimos obcaecati, dolor hic, pariatur fuga eius a error eveniet eaque quam rem nesciunt sunt alias repudiandae tenetur, quas nam!'

  get truncate(): string {
    return this.truncateService.truncate(this.text, { mode: 'words' });
  }

  constructor(private readonly truncateService: TruncateService) { }

}
