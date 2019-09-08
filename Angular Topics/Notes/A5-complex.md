* Multi content projection
#----------------------------------------------------------------------------------------------------
@Component({
  selector: 'multi-content',
  template: `
    <h3>Demoing content projection</h3>
    <div class="box">
      <ng-content select="[header]"></ng-content>
    </div>
    <div class="box">
      <ng-content select="[body]"></ng-content>
    </div>
  `,
})

<multi-content>
    <div header>This is projected to the header region</div>
    <div body>This goes to the body instead</div>
</multi-content>

#----------------------------------------------------------------------------------------------------