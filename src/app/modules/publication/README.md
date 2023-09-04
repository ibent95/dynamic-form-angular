<p>
  <h3>This is the `Publication` feature to implement Dynamic Forms.</h3>
  The form is structured as shown below.
</p>

![Publications Form Structure - White drawio](https://github.com/ibent95/dynamic-form-angular/assets/24244569/44e05356-c13d-47d9-9368-ebd10b53b94f)

<p>
  There are 5 parts of component to organize Dynamic Forms:
  <ol>
    <li>Main Component: the main part to configure global settings and decide which one of grid system to use (No grid system, Bootstrap or Tailwind).</li>
    <li>Grid System Component: each grid systems are defined based on their best practice and then wrap the recursive part of Dynamic Forms.</li>
    <li>Recursive Component: the recursive component is part of mechanism to reduce redundancies of code when define type of fields.</li>
    <li>Fields Component: all type of fields are defined and configured according to each character of fields, so the fields is prepared and will be used whenever the form need.</li>
    <li>Field Children Component: this is optional component. When a field has many variants, it is better to use new component children and call the required child components using `[mode]` directive.</li>
  </ol>
</p>

<p>
  Also, all part of components used single Angular Form (FormBuilder, FormControl, FormGroup, FormArray, ...). And it will structured when the metadata of form is fetched from Backend (since v0.1.0).
</p>



<p>
  /// More information of the 5 parts of component will be added soon.
</p>
