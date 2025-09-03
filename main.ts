input.onButtonPressed(Button.A, function () {
    xgo.move_xgo(xgo.direction_enum.Forward, 75)
    xgo.execution_action(xgo.action_enum.Go_prone)
    xgo.move_xgo(xgo.direction_enum.Forward, 75)
})
xgo.init_xgo_serial(SerialPin.P14, SerialPin.P13)
