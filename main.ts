input.onButtonPressed(Button.A, function () {
    xgo.move_xgo(xgo.direction_enum.Forward, 47)
    xgo.translational_motion_reciprocate_stop(xgo.body_direction_xyz_enum.X)
    xgo.rotate(xgo.rotate_enum.Left, 25)
    xgo.rotate(xgo.rotate_enum.Left, 24)
    xgo.execution_action(xgo.action_enum.Squat)
    xgo.move_xgo(xgo.direction_enum.Forward, 75)
})
xgo.init_xgo_serial(SerialPin.P14, SerialPin.P13)
