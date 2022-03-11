# @ngx-tools/truncate
library for angular with tools to truncate texts

## Installation
Install @ngx-tools/truncate with npm

```bash
  npm install @ngx-tools/truncate
```
## Usage & Demo
First import the TruncateModule in your Module:
```
import { TruncateModule } from '@ngx-tools/truncate';

@NgModule({
  ...
  imports: [TruncateModule,...]
  ...
})
```

### Settings:
* @param {string} [mode='chars']   to count the limit. `chars` to count by characters, or `words` to count by words.
* @param {string} [limit=10] The number of characters or words saved.
* @param {string} [end='...'] Decorative end of the truncated string.


### Usage of the service:
Import the service into your file:
```
import { TruncateService } from '@ngx-tools/truncate';
```
Inject the service into your Component, Service or Directive:
```
export YourComponentServiceOrDirective {
  ...
  constructor(private readonly truncateService: TruncateService...) { }
  ...
}
```
usage in your function:
```
yourFunction() {
  ...
  const params: ITruncateParams = {
    mode: 'chars',
    limit: 10,
    end: '...'
  }

  let truncated = this.truncateService.truncate("Your long text", params);
  ...
}
```


## Features

- pipes
- directive
