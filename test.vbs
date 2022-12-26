Sub Include(file)

  Dim fso, f

  Set fso = CreateObject("Scripting.FileSystemObject")
  Set f = fso.OpenTextFile(file & ".vbs", 1)

  str = f.ReadAll

  f.Close

  ExecuteGlobal str

End Sub

' Now call Include and then call Doit
Include "main"

Doit